"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";

export default function Animation() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const path = usePathname();
  console.log("h", path);

  const homeA = () => {
    const $he_logo = document.querySelector("[g-s='he-logo']") as any;
    gsap.from("#h", {
      autoAlpha: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: $he_logo,
        endTrigger: "#s-s",
        start: "bottom top",
        end: "top top",
        toggleActions: "play reverse play reverse",
      },
    });
  };

  const animation = () => {
    if (path == "/") {
      homeA();
      return;
    }
    gsap.set("#h", {
      autoAlpha: 1,
    });
  };

  useGSAP(() => {
    document.fonts.ready
      .then(() => {
        animation();
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  }, [path]);

  return <></>;
}
