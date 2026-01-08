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
      top: "225rem",
      left: "-430rem",
      width: "1000rem",
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
