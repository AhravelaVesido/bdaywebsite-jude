import { useState, useEffect, useRef } from 'react';

export default function About() {
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId: 'TUNp3mogmbQ',
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          showinfo: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: 'TUNp3mogmbQ',
        },
        events: {
          onStateChange: (e) => {
            setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.about-fade');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <section
      id="About"
      ref={sectionRef}
      className="rounded-md my-10 md:mx-3 md:mb-15 md:mt-5 md:rounded-xl bg-[#F4E9DA]"
    >
      <div className="flex flex-col md:flex-row font-ad text-prim relative z-10">

        {/* Video side */}
        <div className="about-fade flex-1 p-3 mx-5 mt-3 bg-[#F7F1E6] about-video-card rounded-md md:m-10 overflow-hidden relative group">
          <div style={{ paddingTop: '177.78%' }} className="relative">
            <div
              ref={playerContainerRef}
              className="absolute pointer-events-none rounded-md"
              style={{ top: '-10%', left: '-10%', width: '120%', height: '120%' }}
            />
            <div
              onClick={togglePlay}
              className="absolute top-0 left-0 w-full h-full cursor-pointer z-10"
            />
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 pointer-events-auto"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>

        {/* Text side */}
        <div className="about-fade flex-2 mx-5 my-3 p-5 about-parchment text-center rounded-md md:ml-0 md:m-10 p-5 md:p-10">

          {/* Heading with flanking stars */}
          <div className="about-title-row mb-1">
            <span className="star">✦</span>
            <h3 className="text-l md:text-xl lg:text-2xl font-semibold mb-1">
              The Little Chronicle of Prince Thomas Jude
            </h3>
            <span className="star">✦</span>
          </div>

          {/* Crown divider */}
          <div className="about-crown-divider">
            <span className="text-base leading-none">👑</span>
          </div>

          <div className='text-[#4a4a4a]'>
            <p className="font-semibold text-m lg:text-l">
              Let it be proclaimed that Prince Thomas Jude has filled the royal halls with laughter and light since his noble arrival. At just two moons old, he bestowed upon the realm his first radiant smile, brighter than the dawn. He delights in yogurt feasts, savors bananas and sweet potatoes, and finds wonder in melodies, especially piano ballads and his mother's karaoke songs.
            </p>
            <br />
            <p className="font-semibold text-m lg:text-l">
              The young Prince is a spirited adventurer, roaming the castle halls with curiosity and courage. His cries resound with strength — loud and manly indeed — a herald's trumpet announcing his presence. Ever watchful, he gazes upon the enchanted baby monitor when he awakens, awaiting voices of kin from distant lands, especially his cherished family in the Philippines.
            </p>
            <br />
            <p className="font-semibold text-m lg:text-l">
              Though he treasures his faithful teether and his loyal stuffed sheep, Sir Jojo, his heart is often captured by curious objects of the realm — the royal cellphone, the enchanted remote control, the noble comb, and even the mysterious lotion tube. His beauty is oft admired beyond the castle walls, for travelers and townsfolk alike pause to ask whether he is a young lord or lady. Let it be proclaimed once more that Prince Thomas Jude is the light of our realm, and his first year shall be celebrated with feasts, merriment, and songs that echo across the land.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}