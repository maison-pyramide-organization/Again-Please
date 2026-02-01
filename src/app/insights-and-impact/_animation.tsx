"use client";

import { FontsContext } from "@/contexts/fontsContext";
import { imagesA, textsA } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useContext } from "react";

export default function Animation() {
  const { loaded } = useContext(FontsContext);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const bgA = () => {
    gsap.fromTo(
      "#bg",
      {
        opacity: 0,
        top: "-370rem",
        left: "-600rem",
        width: "3000rem",
      },
      { opacity: 1, duration: 1, ease: "power2.inOut" },
    );
    gsap.to("#bg", {
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: "[g-s='s2']",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to("#bg", {
      width: "2000rem",
      left: "700rem",
      opacity: 1,
      immediateRender: false,
      scrollTrigger: {
        trigger: "[g-s='s4']",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to("#bg", {
      left: "-650rem",
      immediateRender: false,
      scrollTrigger: {
        trigger: "[g-s='s6']",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  };

  const numA = () => {
    const $nums = document.querySelectorAll("[a-n='up']");
    $nums.forEach(($num) => {
      gsap.from($num, {
        opacity: 0,
        textContent: 0,
        duration: 1,
        ease: "power1.out",
        snap: { textContent: 1 }, // rounds to whole numbers
        scrollTrigger: {
          trigger: $num,
          start: "top 90%",
        },
      });
    });
  };

  const tpathA = () => {
    gsap.from('[g-s="path"] #text', {
      attr: { startOffset: "-100%" },
      ease: "power1.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: "[g-s='path']",
        start: "top bottom",
      },
    });
  };

  const lineA = () => {
    const $lines = document.querySelectorAll("[g-s='line']");
    $lines.forEach(($line) => {
      gsap.from($line, {
        width: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: $line,
          start: "bottom bottom",
        },
      });
    });
  };

  const initA = () => {
    // Page
    gsap.set("#p_", {
      autoAlpha: 1,
    });

    const $p_ = document.getElementById("p_") as HTMLElement;
    $p_.classList.remove("d-s");
  };

  useGSAP(() => {
    if (!loaded) return;

    initA();
    bgA();
    numA();
    textsA();
    imagesA();
    lineA();
    tpathA();
  }, [loaded]);

  return null;
}
