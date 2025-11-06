"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Animation() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const path = usePathname();
  const tr = useRef(null) as any;

  const homeA = () => {
    const $he_logo = document.querySelector("[g-s='he-logo']") as any;
    tr.current = gsap.from("#h", {
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
    // ScrollTrigger.getAll().forEach((t) => t.kill());
    if (tr.current) {
      tr.current.scrollTrigger?.kill();
      tr.current.kill();
      tr.current = null;
    }

    if (path == "/") {
      homeA();
      return;
    }
    gsap.set("#h", {
      autoAlpha: 1,
    });
  };

  useGSAP(
    () => {
      document.fonts.ready
        .then(() => {
          animation();
        })
        .catch((error) => {
          console.error("Error loading fonts:", error);
        });
    },
    {
      dependencies: [path],

      revertOnUpdate: true, // ensures cleanup when path changes
    }
  );

  return <></>;
}
