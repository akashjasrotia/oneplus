<<<<<<< HEAD
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
=======
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
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    })
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
    <div ref={containerRef} className="container pt-10 font-oneplus bg-gray-200 relative min-w-[100vw]">
      <h1
        ref={never}
        className="tracking-tight text-9xl md:left-[35%] font-bold absolute left-4"
      >
        Never
      </h1>

      <h1
        ref={settle}
        className="tracking-tight text-9xl md:right-[35%] font-bold text-red-600 absolute right-6 top-30"
      >
        Settle
      </h1>

      <div
        ref={videoRef}
        className="relative overflow-hidden h-auto mt-60 lg:mt-70 w-[40vw] lg:w-[60vw] lg:mb-0 mb-10 mx-auto rounded-2xl"
      >
        <video className="w-full" src={video} autoPlay muted loop />

        <h1 className="absolute lg:text-4xl lg:left-8 lg:bottom-8 bottom-4 left-4 z-10 text-white text-xl font-bold">
          OnePlus Nord 5
        </h1>
        <buttton className="p-3  cursor-pointer rounded-full flex items-center justify-center bg-white/70 text-black absolute bottom-6 right-10 z-10 text-sm lg:text-xl font-bold">
          Grab Now
        </buttton>
      </div>
    </div>
  );
}
>>>>>>> 3a80373 (first commit)
