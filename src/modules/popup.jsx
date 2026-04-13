import { useState, useEffect, useRef } from "react";
import { useConfetti } from './confettiEffect';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const fireConfetti = useConfetti();
  const audioRef = useRef(null);

  useEffect(() => {
   audioRef.current = new Audio("/fanfare.mp3");
  }, []);

  useEffect(() => { setIsOpen(true); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  fireConfetti();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,15,35,0.75)", backdropFilter: "blur(4px)" }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden animate-fade-in"
        style={{ border: "2px solid #c9a84c", boxShadow: "0 0 0 1px #e8d5a3, 0 24px 60px rgba(0,0,0,0.5)" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Top banner */}
        <div className="flex items-center justify-center gap-2 py-3" style={{ background: "#1a2744", borderBottom: "2px solid #c9a84c" }}>
          <span className="text-sm" style={{ color: "#c9a84c" }}>✦</span>
          <p className="m-0 text-xs font-semibold tracking-widest font-ad" style={{ color: "#e8d5a3" }}>
            ROYAL PROCLAMATION
          </p>
          <span className="text-sm" style={{ color: "#c9a84c" }}>✦</span>
        </div>

        {/* Close button */}
        <button
          onClick={() => { audioRef.current?.play().catch(() => {}); setIsOpen(false); }}
          aria-label="Close"
          className="absolute top-2 right-3 w-6 h-6 flex items-center justify-center rounded-full text-xs cursor-pointer"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid #c9a84c", color: "#c9a84c" }}
        >
          ✕
        </button>

        {/* Body */}
        <div className="flex flex-col items-center px-6 pt-4 pb-5 text-center" style={{ background: "#f5f0e8" }}>

          {/* Title */}
          <h2 className="font-ad font-bold mb-1" style={{ color: "#1a2744", fontSize: "22px" }}>
            You Are Invited!
          </h2>

          {/* Gold divider */}
          <div className="flex items-center gap-2 justify-center my-2">
            <div className="h-px w-8" style={{ background: "#c9a84c" }} />
            <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            <div className="h-px w-8" style={{ background: "#c9a84c" }} />
          </div>

          {/* Badge */}
          <div className="inline-block rounded-full px-4 py-1 mb-3" style={{ background: "#1a2744", border: "1px solid #c9a84c" }}>
            <p className="m-0 font-ad font-semibold tracking-wide" style={{ color: "#e8d5a3", fontSize: "11px" }}>
              ♛ This invitation is good for 2 persons
            </p>
          </div>

          {/* GIF */}
          <div className="w-full rounded-lg overflow-hidden mb-4" style={{ border: "2px solid #c9a84c", maxHeight: "500px" }}>
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGdlMDZhNzg3bXZ3YnNwaGkxZTJhMmxrc2p1bXoyc3g1aGpuMXlldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lkw7QvEHjNeiHN2poQ/giphy.gif"
              alt="Royal celebration"
              className="w-full block object-cover"
            />
          </div>

          {/* CTA */}
          <button
            onClick={() => { audioRef.current?.play().catch(() => {}); setIsOpen(false); }}
            className="w-full font-ad font-semibold tracking-widest py-2 rounded-lg cursor-pointer transition-opacity hover:opacity-90 text-sm"
            style={{ background: "#1a2744", border: "2px solid #c9a84c", color: "#e8d5a3" }}
          >
            ✦ Enter the Kingdom ✦
          </button>
        </div>

        {/* Bottom accent */}
        <div className="h-1" style={{ background: "#1a2744", borderTop: "1px solid #c9a84c" }} />
      </div>
    </div>
  );
}