import { useState } from "react";
import { db } from "../firebase";
import { ref, push, set, get } from "firebase/database";
import { useConfetti } from './confettiEffect';

const MAX_PARTICIPANTS = 100;

export default function GreetMe() {
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState("adult");
  const [message, setMessage] = useState(null); // { text, type: "error" | "success" }
  const fireConfetti = useConfetti();

  const addUser = async () => {
    setMessage(null);

    if (!name) return setMessage({ text: "Please enter your full name.", type: "error" });
    if (!/^[A-Za-z ]+$/.test(name)) return setMessage({ text: "Name can only contain letters and spaces.", type: "error" });

    try {
      const trimmedName = name.trim();
      const normalizedName = trimmedName.toLowerCase();

      const usersRef = ref(db, "users");
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

      const timestamp = new Date().toISOString();
      const formattedDate = new Date().toLocaleString();

      const newVisitorRef = push(ref(db, "users"));
      await set(newVisitorRef, {
        VisitorName: trimmedName,
        ageGroup: ageGroup,
        timestamp: timestamp,
        formattedDate: formattedDate,
      });

      setMessage({ text: "Your name has been recorded!", type: "success" });
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
          setMessage(null); // clear message on new input
        }}
        placeholder="Enter Full Name"
        className="border-none bg-[#FFFDFD] rounded-lg p-2 md:p-3 mb-1 block md:w-80 font-ad font-semibol shadow-md text-semibold"
      />

      {/* Inline message */}
      {message && (
        <p className={`text-sm font-ad font-semibold mb-2 ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
          {message.type === "error" ? "⚠ " : "✓ "}{message.text}
        </p>
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
          />
          Kid
        </label>
      </div>

      <button
        type="button"
        onClick={addUser}
        className="text-white px-8 py-2 rounded-lg bg-prim font-ad hover:bg-gold"
      >
        Submit
      </button>
    </>
  );
}