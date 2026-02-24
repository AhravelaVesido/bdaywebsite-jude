import { useState, useEffect } from "react";
import { useConfetti } from './confettiEffect';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const fireConfetti = useConfetti();

  useEffect(() => {
    setIsOpen(true);
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
          className="flex flex-col relative bg-[#F0E8DE] rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fade-in "
          onClick={(e) => e.stopPropagation()}
        >
 
          

          <div className="flex flex-col items-center p-3">
            <h3 className="font-ad text-xl md:px-0 md:text-2xl font-bold text-prim pb-1">You are invited!</h3>
            <hr className="w-20 h-[2px] mb-2 bg-gradient-to-r from-yellow-300 to-amber-500 border-none" />
            <p className="font-ad font-semibold text-[red] text-x1 pb-2">Invitation is good for 2 persons</p>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGdlMDZhNzg3bXZ3YnNwaGkxZTJhMmxrc2p1bXoyc3g1aGpuMXlldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lkw7QvEHjNeiHN2poQ/giphy.gif" alt="" className="rounded-lg"/>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white px-8 py-2 rounded-lg font-ad btn-gold"
            aria-label="Close"
          >
           Proceed
          </button>

        </div>
      </div>
    </>
  );
}

