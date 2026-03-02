import { useEffect, useRef } from "react";
import GreetMe from "./modules/greet"

function Hero() {
     const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!videoRef.current) return;
            const scrollY = window.scrollY;
            videoRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="Hero" className="relative flex items-center text-prim py-13 justify-end md:py-20 md:h-screen">
            
            {/* Background Video */}
            <div className="absolute inset-0 md:w-full md:h-full z-0 overflow-hidden">
                <iframe
                    ref={videoRef}
                    src="https://player.vimeo.com/video/1166616018?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 md:left-1/2 md:min-w-full min-h-full w-[157%] h-[155%] md:w-auto md:h-auto md:aspect-video md:min-w-[177.78vh] md:min-h-[56.25vw]"
                    title="Background Video"
                />
            </div>



            {/* Content */}
            <div className="relative flex md:flex-row md:w-full ">
                <div className="md:flex-1 hidden md:block" />
                <div className="flex flex-col items-center md:items-start  p-3 rounded-md mr-0 md:backdrop-blur-none md:shadow-none md:mr-0 md:bg-transparent md:flex-1 md:pl-50">
                    <h3 className="hidden md:block font-ad text-xl md:px-0 md:text-3xl font-bold text-prim pb-1">Confirm Your Attendance</h3>
                    <h3 className="md:hidden font-ad text-xl md:px-0 md:text-3xl font-bold text-prim pb-1">Confirm Attendance</h3>
                    <hr className="w-20 h-[2px] mb-2 bg-gradient-to-r from-yellow-300 to-amber-500 border-none" />
                    <GreetMe />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform rotate-180 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-5 md:h-16 drop-shadow-[0_-4px_6px_rgba(0,0,0,0.9)]">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"  fill="#F0E8DE"/>
                </svg>
            </div>
        </section>
    )
}

export default Hero