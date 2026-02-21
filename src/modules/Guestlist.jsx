import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

// Returns true only on May 30
function isGuestListVisible() {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed: May = 4
  const day = now.getDate();
  return month === 4 && day === 30;
}

export default function GuestList() {
  const [guestsByYear, setGuestsByYear] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const visible = isGuestListVisible();

  useEffect(() => {
    // Don't fetch if not the right date
    if (!visible) {
      setLoading(false);
      return;
    }

    const fetchGuests = async () => {
      try {
        const usersRef = ref(db, "users");
        const snapshot = await get(usersRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const organized = {};

          Object.entries(data).forEach(([year, entries]) => {
            const names = Object.values(entries).sort((a, b) =>
              a.VisitorName.localeCompare(b.VisitorName)
            );
            organized[year] = names;
          });

          // Sort years descending (newest first)
          const sorted = Object.fromEntries(
            Object.entries(organized).sort(([a], [b]) => b - a)
          );

          setGuestsByYear(sorted);
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

  // Not May 30 — render nothing
  if (!visible) return null;

  if (loading) {
    return (
      <p className="text-sm font-ad font-semibold text-prim animate-pulse">
        Loading guest list...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-sm font-ad font-semibold text-red-500">⚠ {error}</p>
    );
  }

  if (Object.keys(guestsByYear).length === 0) {
    return (
      <p className="text-sm font-ad font-semibold text-prim">
        No guests yet.
      </p>
    );
  }

  return (
    <div className="font-ad">
      {Object.entries(guestsByYear).map(([year, guests]) => (
        <div key={year} className="mb-8">
          {/* Year heading */}
          <h3 className="text-prim font-ad font-bold text-2xl mb-3 border-b border-prim pb-1">
            🎂 April 1, {year}
          </h3>

          {/* Total count */}
          <p className="text-sm font-semibold text-prim mb-3">
            {guests.length} {guests.length === 1 ? "guest" : "guests"}
          </p>

          {/* Names list */}
          <ul className="space-y-2">
            {guests.map((guest, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-prim">
                  {index + 1}. {guest.VisitorName}
                </span>
                <span className="text-xs font-semibold text-prim opacity-60 capitalize">
                  {guest.ageGroup}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}