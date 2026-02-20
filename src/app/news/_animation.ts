"use client";

import { FontsContext } from "@/contexts/fontsContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useContext } from "react";

export default function Animation() {
  const { loaded } = useContext(FontsContext);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const bgA = () => {
    gsap.set("#bg", {
      opacity: 1,
      top: "-220rem",
      left: "360rem",
      width: "2000rem",
    });

    gsap.to("#bg", {
      opacity: 0,
      immediateRender: false,
      duration: 0.4,
      scrollTrigger: {
        trigger: "[g-s='s-p']",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to("#bg", {
      opacity: 1,
      top: "0",
      left: "-750rem",
      immediateRender: false,
      duration: 0.4,
      scrollTrigger: {
        trigger: "[g-s='s-b']",
        start: "top center",
        toggleActions: "play none none reverse",
      },
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
  }, [loaded]);

  return null;
}
