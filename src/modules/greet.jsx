import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, push, set, get } from "firebase/database";
import { useConfetti } from './confettiEffect';

const MAX_PARTICIPANTS = 100;
const MAX_PER_DEVICE = 3;

// Returns the current event year.
// Before April 1 → last year (event hasn't started yet)
// April 1 and after → this year (event is active)
function getEventYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed: April = 3
  const day = now.getDate();
  if (month < 3 || (month === 3 && day < 1)) {
    return year - 1;
  }
  return year;
}

// Gets or creates a device ID.
// If it's the first time, bakes in the first name submitted.
function getDeviceId(firstName) {
  let id = localStorage.getItem("device_id");
  if (!id && firstName) {
    const slug = firstName.toLowerCase().replace(/\s+/g, "");
    const random = Math.random().toString(36).substring(2) + Date.now().toString(36);
    id = `${slug}-${random}`;
    localStorage.setItem("device_id", id);
  } else if (!id) {
    // Fallback if called before name is available (e.g. on mount check)
    id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem("device_id", id);
  }
  return id;
}

export default function GreetMe() {
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState("adult");
  const [message, setMessage] = useState(null);
  const [showDeviceBanner, setShowDeviceBanner] = useState(false);
  const [deviceLimitReached, setDeviceLimitReached] = useState(false);
  const fireConfetti = useConfetti();

  const eventYear = getEventYear();

  // On mount: check Firebase for this device's submission record
  useEffect(() => {
    const checkDeviceLimit = async () => {
      try {
        const deviceId = getDeviceId(); // no name on mount, uses existing or fallback
        const deviceRef = ref(db, `devices/${deviceId}`);
        const deviceSnap = await get(deviceRef);

        if (deviceSnap.exists()) {
          const data = deviceSnap.val();
          const storedYear = data.eventYear;
          const storedCount = data.years?.[storedYear]?.count ?? 0;

          if (storedYear === eventYear && storedCount >= MAX_PER_DEVICE) {
            setDeviceLimitReached(true);
            setShowDeviceBanner(true);
            setTimeout(() => setShowDeviceBanner(false), 5000);
          }
        }
      } catch (error) {
        console.error("Error checking device limit:", error);
      }
    };
    checkDeviceLimit();
  }, []);

  // Auto-dismiss inline message after 5 seconds
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(null), 5000);
    return () => clearTimeout(t);
  }, [message]);

  const addUser = async () => {
    setMessage(null);

    if (!name) return setMessage({ text: "Please enter your full name.", type: "error" });
    if (!/^[A-Za-z ]+$/.test(name)) return setMessage({ text: "Name can only contain letters and spaces.", type: "error" });

    try {
      const trimmedName = name.trim();
      const normalizedName = trimmedName.toLowerCase();
      const firstName = trimmedName.split(" ")[0]; // first word of the full name

      // Pass firstName so it gets baked into the ID on first submission
      const deviceId = getDeviceId(firstName);
      const deviceRef = ref(db, `devices/${deviceId}`);

      // Fetch device record from Firebase
      const deviceSnap = await get(deviceRef);
      const deviceData = deviceSnap.exists() ? deviceSnap.val() : {};
      const storedYear = deviceData.eventYear ?? null;
      const yearData = deviceData.years?.[eventYear] ?? { count: 0, names: [] };

      // If stored year matches current event year, enforce limit
      if (storedYear === eventYear && yearData.count >= MAX_PER_DEVICE) {
        setDeviceLimitReached(true);
        setShowDeviceBanner(true);
        setTimeout(() => setShowDeviceBanner(false), 5000);
        return;
      }

      // Check global participants for this event year
      const usersRef = ref(db, `users/${eventYear}`);
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const users = snapshot.val();
        const userList = Object.values(users);

        if (userList.length >= MAX_PARTICIPANTS) {
          return setMessage({ text: "Sorry, the guest list is full! Maximum of 100 participants reached.", type: "error" });
        }

        const isDuplicate = userList.some(
          user => user.VisitorName.toLowerCase() === normalizedName
        );
        if (isDuplicate) {
          return setMessage({ text: "This name has already been submitted!", type: "error" });
        }
      }

      const now = new Date();
      const timestamp = now.toISOString();
      const formattedDate = now.toLocaleString();

      // Save visitor under the event year
      const newVisitorRef = push(ref(db, `users/${eventYear}`));
      await set(newVisitorRef, {
        VisitorName: trimmedName,
        ageGroup: ageGroup,
        timestamp: timestamp,
        formattedDate: formattedDate,
        eventYear: eventYear,
      });

      // Update device record
      const newCount = yearData.count + 1;
      await set(deviceRef, {
        ...deviceData,
        eventYear: eventYear,
        lastSubmitted: timestamp,
        years: {
          ...(deviceData.years ?? {}),
          [eventYear]: {
            count: newCount,
            names: [...(yearData.names ?? []), trimmedName],
            lastSubmitted: timestamp,
            formattedDate: formattedDate,
          },
        },
      });

      const remaining = MAX_PER_DEVICE - newCount;
      const remainingdummy = 2 -newCount;

      if (newCount >= MAX_PER_DEVICE) {
        setDeviceLimitReached(true);
      }

      setMessage({
        line1: "Your name has been recorded!",
        line2: remaining > 0
          ? `You can add ${remainingdummy} more name${remainingdummy > 1 ? "s" : ""} from this device.`
          : "You've reached the limit for this device.",
        type: "success"
      });

      fireConfetti();
      setName("");
      setAgeGroup("adult");

    } catch (error) {
      console.error("Error adding visitor: ", error);
      setMessage({ text: "Something went wrong. Please try again.", type: "error" });
    }
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setMessage(null);
        }}
        placeholder="Enter Full Name"
        disabled={deviceLimitReached}
        className={`border-none bg-[#FFFDFD] rounded-lg p-2 md:p-3 mb-1 block md:w-80 font-ad font-semibol shadow-md text-semibold ${deviceLimitReached ? "opacity-50 cursor-not-allowed" : ""}`}
      />

      {/* Permanent banner — always visible when limit is reached */}
      {deviceLimitReached && (
        <p className="text-sm font-ad text-center md:text-left font-semibold mb-2 text-red-500">
          ⚠ Maximum names reached.
        </p>
      )}

      {/* Temporary banner — shows for 5 seconds */}
      {showDeviceBanner && !deviceLimitReached && (
        <p className="text-sm font-ad text-center md:text-left font-semibold mb-2 text-red-500">
          ⚠ This device has already submitted <br /> the maximum of {MAX_PER_DEVICE} names.
        </p>
      )}

      {/* Inline message */}
      {message && (
        <div className={`text-sm text-center md:text-left font-ad font-semibold mb-2 max-w-[320px] ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
          <p>{message.type === "error" ? "⚠ " : "✓ "}{message.line1 ?? message.text}</p>
          {message.line2 && <p>{message.line2}</p>}
        </div>
      )}

      {/* Age Group Radio Buttons */}
      <div className="flex gap-6 mb-3">
        <label className="flex items-center gap-2 cursor-pointer font-ad font-semibold text-prim">
          <input
            type="radio"
            name="ageGroup"
            value="adult"
            checked={ageGroup === "adult"}
            onChange={() => setAgeGroup("adult")}
            className="accent-prim w-4 h-4"
            disabled={deviceLimitReached}
          />
          Adult
        </label>
        <label className="flex items-center gap-2 cursor-pointer font-ad font-semibold text-prim">
          <input
            type="radio"
            name="ageGroup"
            value="kid"
            checked={ageGroup === "kid"}
            onChange={() => setAgeGroup("kid")}
            className="accent-prim w-4 h-4"
            disabled={deviceLimitReached}
          />
          Kid
        </label>
      </div>

      <button
        type="button"
        onClick={addUser}
        disabled={deviceLimitReached}
        className={`text-white px-8 py-2 rounded-lg bg-prim font-ad btn-gold ${deviceLimitReached ? "opacity-50 cursor-not-allowed hover:bg-prim" : ""}`}
      >
        Submit
      </button>
    </>
  );
}