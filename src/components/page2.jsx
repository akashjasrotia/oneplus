import Hero from "../assets/images-videos/Hero.jpg";
import Pad3 from "../assets/images-videos/Pad3.jpg";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page2() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const arr = containerRef.current?.children;
      if (!arr) return;

      Array.from(arr).forEach((child, index) => {
        gsap.from(child, {
          y: 200,
          opacity: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: child,
            start: "top 90%",
            end: "top 50%",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div

        className="font-oneplus z-30 lg:pt-10 pt-30 relative h-full pb-30 bg-[#f8f8f8]"
      >
        <div className="absolute z-30 top-0 md:top-8 flex flex-col justify-center items-center w-full">
          <p className="text-gray-600">Sale starts 12AM, 22nd Sept.</p>
          <h1 className="text-4xl mt-2 mb-2 font-semibold text-center">
            OnePlus Festive Celebration
          </h1>
          <p>#Makeitspecial with exclusive offers and giveaways</p>
          <button className="mt-4 text-sm bg-black text-white px-5 py-2 rounded-full cursor-pointer">
            Notify Me
          </button>
        </div>
        <img
          src={Hero}
          alt="Hero"
          className="z-10 scale-550 md:scale-440 lg:scale-170"
        />
      </div>
      <div
        className="font-oneplus lg:pt-10 pt-80 relative h-full bg-[#f8f8f8]"
      >
        <div className="absolute z-30 top-50 md:top-20 flex flex-col justify-center items-center w-full">
          <p className="text-gray-600">Masterful by Every Measure.</p>
          <h1 className="text-4xl mt-2 mb-2 font-semibold text-center">
            OnePlus Pad 3
          </h1>
          <p>Sale is live! Starting at ₹42,749 incl. of bank discount.</p>
          <button className="mt-4 text-sm bg-black text-white px-5 py-2 rounded-full cursor-pointer">
            Buy Now
          </button>
        </div>
        <img
          src={Pad3}
          alt="Hero"
          className=" scale-550 md:scale-440 lg:scale-170"
        />
      </div>
    </div>
  );
}
