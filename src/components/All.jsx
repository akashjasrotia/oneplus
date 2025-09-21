import gsap from "gsap";
import { useEffect, useRef } from "react";
import oneplusNord4 from "../assets/images-videos/oneplusNord4.png";
export default function All() {
  const phone1 = useRef(null);
  const cursor = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursor.current) return;
      gsap.to(cursor.current, {
        x: e.clientX - cursor.current.offsetWidth / 2,
        y: e.clientY - cursor.current.offsetHeight / 2,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const containerEl = container.current;
    containerEl.addEventListener("mousemove", moveCursor);

    return () => {
      containerEl.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const mouseenter1 = () => {
      gsap.to(cursor.current, {
        width: 120,
        height: 120,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          if (cursor.current) {
            cursor.current.style.backgroundColor = 'transparent';
            cursor.current.style.backgroundImage =`url(${oneplusNord4})`;
            cursor.current.style.backgroundSize = "cover";
            cursor.current.style.backgroundRepeat = "no-repeat";
            cursor.current.style.backgroundPosition = "center";
          }
        },
      });
    };

    const mouseleave1 = () => {
      gsap.to(cursor.current, {
        width: 20,
        height: 20,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          if (cursor.current) {
            cursor.current.style.backgroundImage = "none";
            cursor.current.style.backgroundColor = "black";
          }
        },
      });
    };

    const phoneEl = phone1.current;
    phoneEl.addEventListener("mouseenter", mouseenter1);
    phoneEl.addEventListener("mouseleave", mouseleave1);

    return () => {
      phoneEl.removeEventListener("mouseenter", mouseenter1);
      phoneEl.removeEventListener("mouseleave", mouseleave1);
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative text-5xl font-oneplus text-center cursor-none"
    >
      {/* Cursor */}
      <div
        ref={cursor}
        className="w-5 h-5 opacity-50 rounded-full bg-black fixed top-0 left-0 pointer-events-none"
      />

      {/* Content */}
      <div ref={phone1} className="border-y-2 p-10">
        Oneplus Nord 4
      </div>
      <div className="border-b-2 p-10">Oneplus Pad 3</div>
      <div className="border-b-2 p-10">3rd</div>
      <div className="border-b-2 p-10">4th</div>
    </div>
  );
}
