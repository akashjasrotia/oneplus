import React, { useEffect, useRef, useState } from "react";
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
  const cursor = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      const videoEl = videoRef.current.querySelector("video");
      if (videoEl) {
        videoEl.muted = !muted; // actually toggle muted on DOM video element
      }
      setMuted((prev) => !prev);
    }
  };

  // Cursor follow
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursor.current) {
        gsap.to(cursor.current, {
          x: e.clientX - 40,
          y: e.clientY - 40,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHovered(true);
      if (cursor.current) {
        gsap.to(cursor.current, {
          width: 80,
          height: 80,
          backgroundColor: "#000",
          color: "#fff",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      setHovered(false);
      if (cursor.current) {
        gsap.to(cursor.current, {
          width: 0,
          height: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("mouseenter", handleMouseEnter);
      videoRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("mouseenter", handleMouseEnter);
        videoRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // GSAP animations
  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power.out",
      delay: 0.5,
    });

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
    <div
      ref={containerRef}
      className="z-50 container pt-10 font-oneplus relative min-w-[100vw]"
    >
      {/* Custom Cursor */}
      <div
        ref={cursor}
        className="z-[100] fixed flex items-center justify-center rounded-full bg-black text-white text-sm pointer-events-none"
        style={{
          width: 0,
          height: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        {hovered ? (muted ? "Unmute" : "Mute") : ""}
      </div>

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
        onClick={toggleMute}
        className="relative overflow-hidden h-auto mt-80 lg:mt-90 w-[80vw] lg:w-[80vw] lg:mb-0 mb-10 mx-auto rounded-lg cursor-none"
      >
        {/* Video */}
        <video className="w-full z-10" src={video} autoPlay loop muted={muted} />

        {/* Overlay Text */}
        <h1 className="absolute bottom-8 left-8 z-10 text-white text-2xl font-bold">
          OnePlus Nord 5
        </h1>
      </div>
    </div>
  );
}
