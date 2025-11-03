"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase } from "gsap/all";

export default function Animation() {
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    SplitText,
    DrawSVGPlugin,
    CustomEase
  );

  const animation = () => {
    CustomEase.create("io2", ".45,0,.55,1");

    ////////////////
    // HEADER
    ////////////////

    ////////////////
    // HERO SECTION
    ////////////////
    const $he_t1 = document.querySelector("[g-s='he-t1']");
    // const $he_t2 = document.querySelector("");
    const he_t2_split = SplitText.create("[g-s='he-t2']", { type: "lines" });
    const $he_line = document.getElementById("he-line") as HTMLElement;
    const $he_path = $he_line?.querySelector("path") as any;

    const he_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: $he_line,
        scrub: true,
        start: "top top",
        end: "bottom center",
      },
    });
    he_tl
      .from($he_path, { drawSVG: 0, duration: 4 })
      .from(
        $he_t1,
        {
          y: "150%",
          opacity: 0,
        },
        0
      )
      .to(
        $he_t1,
        {
          y: "-120%",
          opacity: 0,
        },
        1
      )
      .from(
        he_t2_split.lines,
        {
          y: "150%",
          opacity: 0,
          stagger: {
            each: 0.1,
          },
        },
        2
      )
      .to(
        he_t2_split.lines,
        {
          y: "-120%",
          opacity: 0,
          stagger: {
            each: 0.1,
          },
        },
        3
      );

    ////////////////
    // ABOUT SECTION
    ////////////////

    const $ab_line = document.getElementById("ab-line") as HTMLElement;
    const $ab_path = $ab_line?.querySelector("path") as any;

    gsap.from($ab_path, {
      drawSVG: 0,
      scrollTrigger: {
        trigger: $ab_line,
        scrub: true,
        start: "top 70%",
        end: "center 10% ",
      },
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
  });

  return null;
}
