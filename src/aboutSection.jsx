export default function About() {
  return (
    <section
      id="About"
      className="rounded-md my-10 md:mx-20 md:my-15 md:rounded-xl bg-[#DDCFCD]"
    >
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
      <div className="flex flex-col md:flex-row font-ad text-prim">
        <div className="flex-1 p-5 mx-5 mt-3 bg-black rounded-md md:m-10">
          <p>placeholder</p>
        </div>
        <div className="flex-2 mx-5 my-3 p-5 bg-[#F0E8DE] text-center rounded-md md:ml-0 md:m-10 md:text-left">
          <h3 className="text-l md:text-2xl font-semibold">
            The Little Chronicle of Prince Thomas Jude
          </h3>
          <hr className="w-20 h-[2px] my-1 md:mx-0 mx-auto bg-gradient-to-r from-yellow-300 to-amber-500 border-none sr" />
          <div>
            <p className="font-semibold">
              Be it known across the kingdom That our beloved Prince Thomas Jude
              has filled the castle with joy since his noble arrival.{" "}
            </p>
            <br />
            <p className="font-semibold">
              At just two months, he gifted the realm his first radiant smile.
              he delights in yogurt feasts, finds wonder in baby can read, and
              is soothed by his mother’s gentle songs. He shows tender love for
              animals, and treasures most his faithful teether.{" "}
            </p>
            <br />
            <p className="font-semibold">
              <p className="font-semibold">
                Be it known across the kingdom That our beloved Prince Thomas
                Jude Has filled the castle with joy since his noble arrival.{" "}
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
