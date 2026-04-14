import { useEffect, useState } from "react";

function Navigation() {
  const [active, setActive] = useState("Hero");

  useEffect(() => {
    const sections = ["Hero", "About", "carousel", "details"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const links = [
    { label: "Home", href: "#Hero", id: "Hero" },
    { label: "About", href: "#About", id: "About" },
    { label: "Photos", href: "#carousel", id: "carousel" },
    { label: "Details", href: "#details", id: "details" },
  ];

  return (
    <nav className="w-dvw text-black bg-prim sticky top-0 z-11">
      <div className="text-center p-2 md:flex md:p-5 md:justify-between">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <span className="text-2xl pb-[3px]" style={{ color: "#c9a84c" }}>♛</span>
          <span className="font-ad text-2xl uppercase font-semibold text-gold md:text-xl">
            THOMAS JUDE'S BIRTHDAY
          </span>
        </div>
        <ul className="flex list-none gap-6 font-ad text-white justify-around my-2 font-semibold md:m-0 ">
          {links.map(({ label, href, id }) => (
            <li key={label} className="relative group">
              <a href={href}>{label}</a>
              {/* Animated underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gold transition-all duration-300 ease-in-out
                  ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;