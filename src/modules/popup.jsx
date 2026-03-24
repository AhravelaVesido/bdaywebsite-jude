import { useState, useEffect, useRef } from "react";
import { useConfetti } from './confettiEffect';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const fireConfetti = useConfetti();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("https://tfmwhqdxycgpvztajpvh.supabase.co/storage/v1/object/public/Sounds/freesound_community-medieval-fanfare-6826.mp3");
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  fireConfetti();
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="flex flex-col relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {
              audioRef.current?.play().catch(() => {});
              setIsOpen(false);
            }}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-prim hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="flex flex-col items-center p-3">
            <h3 className="font-ad text-xl md:px-0 md:text-2xl font-bold text-prim pb-1">You are invited!</h3>
            <hr className="w-20 h-[2px] mb-2 bg-gold border-none" />
            <p className="font-ad font-semibold text-[red] text-x1 pb-2">Invitation is good for 2 persons</p>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGdlMDZhNzg3bXZ3YnNwaGkxZTJhMmxrc2p1bXoyc3g1aGpuMXlldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lkw7QvEHjNeiHN2poQ/giphy.gif" alt="" className="rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
}