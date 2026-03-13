import BirthdayCountdown from "./modules/countDown";
import About from "./aboutSection";

export default function SectionDate() {
  return (
    <section
      id="DaysLeft"
      className="bg-[#F0E8DE] p-5 md:p-10 relative overflow-hidden"
    >
      <div className="font-ad flex flex-col items-center text-prim">
        <BirthdayCountdown />
      </div>

      <div>
        <About />
      </div>

    {/**stickers**/}
    <img src="https://i.ibb.co/zhTLhS8T/cloud.png" alt="" className="absolute sticker-animate drop-shadow-lg right-[10%] md:top-[15%] top-[13%] rotate-[0deg] md:scale-[1.25] scale-[.8] "/>
    <img src="https://i.ibb.co/zhTLhS8T/cloud.png" alt="" className="absolute sticker-animate drop-shadow-lg md:left-[0%] left-[-10%] md:top-[30%] top-[26%] rotate-[0deg] md:scale-[.6] scale-[.5] "/>
    <img src="https://i.ibb.co/4wR39JLk/dragons.png" alt="" className="absolute sticker-animate drop-shadow-lg md:right-[-10%] right-[-35%] md:bottom-[-5%] bottom-[-10%] rotate-[0deg] md:scale-[.6] scale-[.5] "/>
    <img src="https://i.ibb.co/4Z5nGpdR/boat.png" alt="" className="absolute sticker-animate drop-shadow-lg md:left-[7%] left-[0%] md:bottom-[0%] bottom-[-6%] rotate-[0deg] md:scale-[.6] scale-[.5] "/>
    <img src="https://i.ibb.co/4Z5nGpdR/boat.png" alt="" className="absolute sticker-animate drop-shadow-lg md:left-[45%] left-[30%] md:bottom-[-4%] bottom-[-7%] rotate-[0deg] md:scale-[1] scale-[.8] "/>
    <img src="https://i.ibb.co/9kYKgNXs/dragon-sm.png" alt="" className="absolute sticker-animate drop-shadow-lg md:left-[33%] left-[30%] md:bottom-[40%] bottom-[8%] rotate-[0deg] md:scale-[.5] scale-[.8] "/>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform rotate-180 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-5 md:h-16 drop-shadow-[0_-4px_6px_rgba(0,0,0,0.9)]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#A1B6C2"
          />
        </svg>
      </div>
    </section>
  );
}
