import GreetMe from "./modules/greet"

function Hero() {
    return (
        <section id="Hero" className="relative flex items-center text-prim py-13 justify-end md:py-20 md:h-screen">
            
            {/* Background Video */}
            <div className="absolute inset-0 md:w-full md:h-full z-0 overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1166616018?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 md:left-1/2 md:min-w-full min-h-full w-[157%] h-[155%] md:w-auto md:h-auto md:aspect-video md:min-w-[177.78vh] md:min-h-[56.25vw]"
                    title="Background Video"
                />
            </div>



            {/* Content */}
            <div className="relative flex md:flex-row md:w-full">
                <div className="md:flex-1 hidden md:block" />
                <div className="flex flex-col items-center md:items-start  p-3 rounded-md mr-0 md:backdrop-blur-none md:shadow-none md:mr-0 md:bg-transparent md:flex-1 md:pl-50">
                    <h3 className="hidden md:block font-ad text-xl md:px-0 md:text-3xl font-bold text-prim pb-1">Confirm Your Attendance</h3>
                    <h3 className="md:hidden font-ad text-xl md:px-0 md:text-3xl font-bold text-prim pb-1">Confirm Attendance</h3>
                    <hr className="w-20 h-[2px] mb-2 bg-gradient-to-r from-yellow-300 to-amber-500 border-none" />
                    <GreetMe />
                </div>
            </div>
        </section>
    )
}

export default Hero