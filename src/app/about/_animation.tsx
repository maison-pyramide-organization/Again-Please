"use client";

import { DimensionContext } from "@/contexts/dimensionsContext";
import { FontsContext } from "@/contexts/fontsContext";
import { imagesA, textsA } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useContext } from "react";

export default function Animation() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  const { isMobile } = useContext(DimensionContext);
  const { loaded } = useContext(FontsContext);

  const bgA = () => {
    gsap.fromTo(
      "#bg",
      {
        opacity: 0,
        top: "-45rem",
        left: "285rem",
        width: "1500rem",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    gsap.to("#bg", {
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#s-w",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to("#bg", {
      opacity: 1,
      width: "2000rem",
      top: "-20rem",
      left: "-1065rem",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#s-f",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  };

  const bgAM = () => {
    const t1 = gsap.set("#bg", {
      opacity: 1,
      top: "-40rem",
      left: "-395rem",
      width: "1300rem",
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
    textsA();
    imagesA();
    isMobile ? bgAM() : bgA();
  }, [loaded, isMobile]);

  return null;
}
