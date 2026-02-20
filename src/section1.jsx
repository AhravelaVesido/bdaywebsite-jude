import BirthdayCountdown from "./modules/countDown";

export default function SectionDate () {
    
    return(
        <section id="DaysLeft" className="bg-[#F0E8DE] p-5 relative overflow-hidden">
            {/* Background Video 
              <div className="absolute inset-0 z-[] overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1166694246?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute top-1/2 left-0 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 min-h-full w-auto h-[100%] md:min-w-full md:w-auto md:h-auto md:aspect-video md:min-w-[177.78vh] md:min-h-[56.25vw]"
                    title="Background Video"
                />
              </div>
            */}
            <div className="font-ad flex flex-col items-center">
                <BirthdayCountdown/>
            </div>
        </section>
    )
}