"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Animation() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const animation = () => {
    const $p_ = document.getElementById("p_") as HTMLElement;
    $p_.classList.remove("d-s");
  };

  useGSAP(() => {
    document.fonts.ready
      .then(() => {
        animation();
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  });

  return <></>;
}
