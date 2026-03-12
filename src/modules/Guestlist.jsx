import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

function isGuestListVisible() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  return month === 4 && day === 30;
}

// Standalone infinite carousel — fetches its own data
export function InfiniteNameCarousel() {
  const [allNames, setAllNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const snapshot = await get(ref(db, "users"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const names = Object.values(data)
            .flatMap((entries) => Object.values(entries))
            .map((g) => g.VisitorName)
            .sort((a, b) => a.localeCompare(b));
          setAllNames(names);
        }
      } catch (err) {
        console.error("Error fetching names for carousel:", err);
      }
    };

    fetchNames();
  }, []);

  if (allNames.length === 0) return null;

  const repeated = [...allNames, ...allNames, ...allNames, ...allNames, ...allNames];

  return (
    <div
      className="overflow-hidden w-full py-2 border-y border-prim"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <h3 className="text-center text-prim font-ad text-lg pb-5">List of Attendees</h3>
      <div
        className="flex gap-6 whitespace-nowrap justify-between"
        style={{
          animation: "carousel-scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((name, i) => (
          <span
            key={i}
            className="text-sm font-semibold text-prim opacity-75 font-ad shrink-0"
          >
            {name}
            <span className="mx-3 opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// GuestList — no carousel here
export default function GuestList() {
  const [guestsByYear, setGuestsByYear] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const visible = isGuestListVisible();

  useEffect(() => {
    if (!visible) { setLoading(false); return; }

    const fetchGuests = async () => {
      try {
        const snapshot = await get(ref(db, "users"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const organized = {};
          Object.entries(data).forEach(([year, entries]) => {
            organized[year] = Object.values(entries).sort((a, b) =>
              a.VisitorName.localeCompare(b.VisitorName)
            );
          });
          setGuestsByYear(
            Object.fromEntries(Object.entries(organized).sort(([a], [b]) => b - a))
          );
        } else {
          setGuestsByYear({});
        }
      } catch (err) {
        console.error("Error fetching guests:", err);
        setError("Failed to load guest list.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (!visible) return null;
  if (loading) return <p className="text-sm font-ad font-semibold text-prim animate-pulse">Loading guest list...</p>;
  if (error) return <p className="text-sm font-ad font-semibold text-red-500">⚠ {error}</p>;
  if (Object.keys(guestsByYear).length === 0) return <p className="text-sm font-ad font-semibold text-prim">No guests yet.</p>;

  return (
    <div className="font-ad">
      {Object.entries(guestsByYear).map(([year, guests]) => (
        <div key={year} className="mb-8">
          <h3 className="text-prim font-ad font-bold text-2xl mb-3 border-b border-prim pb-1">
            🎂 April 1, {year}
          </h3>
          <p className="text-sm font-semibold text-prim mb-3">
            {guests.length} {guests.length === 1 ? "guest" : "guests"}
          </p>
          <ul className="space-y-2">
            {guests.map((guest, index) => (
              <li key={index} className="flex items-center justify-between gap-4">
                <span className="font-semibold text-prim">{index + 1}. {guest.VisitorName}</span>
                <span className="text-xs font-semibold text-prim opacity-60 capitalize">{guest.ageGroup}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}