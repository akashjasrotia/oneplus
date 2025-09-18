
import React, { useRef } from "react";
import video from "../assets/images-videos/oneplus.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Landing() {
  const never = useRef(null);
  const settle = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.to(never.current, {
      x: -500,
      duration: 1,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to(settle.current, {
      x: 500,
      duration: 1,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to(videoRef.current, {
      width: "100vw",
      borderRadius: 0,
      transformOrigin: "center center",
      duration: 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        end: "top 20%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="container pt-10 font-oneplus relative min-w-[100vw]">
      <h1
        ref={never}
        className="tracking-tight text-9xl md:left-[35%] font-bold absolute left-4"
      >
        Never
      </h1>

      <h1
        ref={settle}
        className="tracking-tight text-9xl md:right-[35%] font-bold text-red-600 absolute right-6 top-40"
      >
        Settle
      </h1>

      <div
        ref={videoRef}
        className="relative overflow-hidden h-auto mt-80 lg:mt-90 w-[80vw] lg:w-[60vw] lg:mb-0 mb-10 mx-auto rounded-lg"
      >
        {/* Video */}
        <video className="w-full" src={video} autoPlay muted loop />

        {/* Overlay Text */}
        <h1 className="absolute bottom-8 left-8 z-10 text-white text-2xl font-bold">
          OnePlus Nord 5
        </h1>
      </div>
    </div>
  );
}
