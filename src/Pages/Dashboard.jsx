import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

export default function Dashboard() {
  const [guestsByYear, setGuestsByYear] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const CAPACITY = 100;

  useEffect(() => {
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

  const allGuests = Object.values(guestsByYear).flat();
  const totalGuests = allGuests.length;
  const capacityPercent = Math.min(Math.round((totalGuests / CAPACITY) * 100), 100);

  const filteredByYear = Object.fromEntries(
    Object.entries(guestsByYear)
      .map(([year, guests]) => [
        year,
        guests.filter((g) =>
          g.VisitorName.toLowerCase().includes(search.toLowerCase())
        ),
      ])
      .filter(([, guests]) => guests.length > 0)
  );

  const barColor =
    capacityPercent >= 90
      ? "bg-red-600"
      : capacityPercent >= 70
      ? "bg-yellow-500"
      : "bg-green-700";

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f0e8" }}>
        <p className="font-ad text-lg" style={{ color: "#1a2744" }}>✦ Loading the royal registry... ✦</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f0e8" }}>
        <p className="font-ad text-red-600">⚠ {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen font-ad" style={{ background: "#f5f0e8" }}>

    {/* Navbar */}
  <nav
    className="flex items-center px-4 md:px-8 h-14 md:h-16"
    style={{ background: "#1a2744", borderBottom: "2px solid #c9a84c" }}
  >
    {/* Left — Back button */}
    <div className="flex-1 md:flex-none flex items-center">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs tracking-wide cursor-pointer transition-opacity hover:opacity-80"
        style={{ border: "1px solid #c9a84c", color: "#c9a84c", background: "transparent" }}
      >
        ← Back
      </button>
    </div>

    {/* Center on mobile, left-shifted on desktop */}
    <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start md:ml-6 gap-2">
      <span className="text-lg" style={{ color: "#c9a84c" }}>♛</span>
      <span className="font-semibold text-xs md:text-sm tracking-widest" style={{ color: "#e8d5a3" }}>
        THOMAS JUDE'S BIRTHDAY
      </span>
    </div>

    {/* Right spacer — only needed on mobile for centering */}
    <div className="flex-1 md:hidden" />
</nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-widest mb-1 font-semibold" style={{ color: "#c9a84c" }}>
            ✦ ADMIN PANEL ✦
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#1a2744" }}>
            Royal Guest Registry
          </h1>
          <div className="w-14 h-0.5 mx-auto" style={{ background: "#c9a84c" }} />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-5">
          <StatCard label="Total Guests" value={totalGuests}/>
          <StatCard label="Adults" value={allGuests.filter((g) => g.ageGroup === "adult").length} />
          <StatCard label="Kids" value={allGuests.filter((g) => g.ageGroup === "kid").length} />
        </div>

        {/* Capacity Block */}
        <div
          className="bg-white rounded-xl p-4 md:p-5 mb-5"
          style={{ border: "1px solid #e8d5a3" }}
        >
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-xs font-semibold tracking-widest m-0" style={{ color: "#c9a84c" }}>
                CAPACITY
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                {CAPACITY - totalGuests > 0
                  ? `${CAPACITY - totalGuests} spots remaining`
                  : "🎉 At full capacity!"}
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold m-0" style={{ color: "#1a2744" }}>
              {totalGuests}
              <span className="text-sm md:text-base font-normal text-gray-400"> / {CAPACITY}</span>
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-2.5 rounded-full transition-all duration-700 ${barColor}`}
              style={{ width: `${capacityPercent}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 text-right mt-1.5">{capacityPercent}% filled</p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="✦ Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-sm bg-white mb-5 outline-none font-ad"
          style={{
            border: "1px solid #e8d5a3",
            color: "#1a2744",
          }}
        />

        {/* Guest Tables */}
        {Object.keys(filteredByYear).length === 0 ? (
          <p className="text-center text-gray-400 py-12">No guests found.</p>
        ) : (
          Object.entries(filteredByYear).map(([year, guests]) => (
            <div
              key={year}
              className="bg-white rounded-xl overflow-hidden mb-6"
              style={{ border: "1px solid #e8d5a3" }}
            >
              {/* Year Header */}
              <div
                className="flex justify-between items-center px-4 md:px-5 py-3"
                style={{ background: "#1a2744", borderBottom: "2px solid #c9a84c" }}
              >
                <h2 className="m-0 text-sm md:text-base font-semibold tracking-wide" style={{ color: "#e8d5a3" }}>
                  ♛ April 1, {year}
                </h2>
                <span
                  className="text-xs rounded-full px-3 py-0.5 tracking-wide"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid #c9a84c",
                    color: "#e8d5a3",
                  }}
                >
                  {guests.length} {guests.length === 1 ? "guest" : "guests"}
                </span>
              </div>

              {/* Table — scrollable on mobile */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ tableLayout: "fixed", minWidth: "320px" }}>
                  <thead>
                    <tr style={{ background: "#faf7f0" }}>
                      <th className="px-4 md:px-5 py-2.5 text-left text-xs font-semibold tracking-widest w-10" style={{ color: "#c9a84c" }}>#</th>
                      <th className="px-4 md:px-5 py-2.5 text-left text-xs font-semibold tracking-widest" style={{ color: "#c9a84c" }}>NAME</th>
                      <th className="px-4 md:px-5 py-2.5 text-left text-xs font-semibold tracking-widest w-24 md:w-32" style={{ color: "#c9a84c" }}>AGE GROUP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest, i) => (
                      <tr key={i} style={{ borderTop: "1px solid #f0e8d0" }}>
                        <td className="px-4 md:px-5 py-3 text-xs text-gray-300">{i + 1}</td>
                        <td className="px-4 md:px-5 py-3 font-semibold" style={{ color: "#1a2744" }}>
                          {guest.VisitorName}
                        </td>
                        <td className="px-4 md:px-5 py-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide capitalize ${
                              guest.ageGroup === "adult"
                                ? "bg-blue-100 text-blue-900"
                                : "bg-pink-100 text-pink-900"
                            }`}
                          >
                            {guest.ageGroup}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div
      className="flex flex-col justify-center md:justify-start md:items-start items-center rounded-xl p-3  md:p-4"
      style={{ background: "#1a2744", border: "1px solid #c9a84c" }}
    >
      <p className="text-xs font-semibold tracking-widest mb-1 text-center md:text-justify" style={{ color: "#c9a84c" }}>
        {label.toUpperCase()}
      </p>
      <p className="text-2xl md:text-4xl font-bold m-0" style={{ color: "#e8d5a3" }}>
        {value}
      </p>
    </div>
  );
}