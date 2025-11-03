"use client";
import bgI from "@a/images/bg.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function Bg() {
  const bgR = useRef(null) as any;
  const path = usePathname();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const homeAnimation = () => {
    const $bg = bgR.current as HTMLElement;
    gsap.to($bg, {
      y: "20%",
      x: "-30%",
      scrollTrigger: {
        trigger: "#s-m",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to($bg, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "#s-w",
        start: "top 40%",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to($bg, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#s-q",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
  };

  useGSAP(() => {
    if (path == "/") homeAnimation();
  });
  return (
    <div className="bg_">
      <figure ref={bgR} className="bg">
        <Image src={bgI} alt="" />
      </figure>
    </div>
  );
}
