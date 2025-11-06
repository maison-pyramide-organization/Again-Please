"use client";

import { FontsContext } from "@/contexts/fontsContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useContext } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Animation() {
  const path = usePathname();
  const { loaded } = useContext(FontsContext);

  const homeA = () => {
    const $bg = document.getElementById("bg");
    if (!$bg) return;

    // --- timeline section
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: "#s-he",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to($bg, {
      top: "-50rem",
      left: "360rem",
    })
      .to($bg, {
        top: "200rem",
        left: "655rem",
      })
      .to($bg, {
        top: "105rem",
        left: "280rem",
      });

    // --- background move
    const t1 = gsap.to($bg, {
      top: "-550rem",
      left: "-280rem",
      width: "2000rem",
      immediateRender: false,
      ease: "none",
      scrollTrigger: {
        trigger: "#s-s",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    // --- fade out
    const t2 = gsap.to($bg, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#s-m",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    // --- fade in (Q section)
    const t3 = gsap.fromTo(
      $bg,
      {
        opacity: 0,
        top: "-190rem",
        left: "-680rem",
      },
      {
        opacity: 1,
        top: "-190rem",
        left: "-680rem",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#s-q",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
      }
    );
  };

  const aboutA = () => {
    gsap.set("#bg", {
      top: "-190rem",
      left: "-680rem",
      width: "2000rem",
    });
  };

  useGSAP(
    () => {
      // only run on home page
      if (!loaded) return;
      if (path == "/") homeA();
      if (path == "/about") aboutA();
    },
    {
      dependencies: [path, loaded],
      revertOnUpdate: true, // ensures cleanup when path changes
    }
  );

  return null;
}
