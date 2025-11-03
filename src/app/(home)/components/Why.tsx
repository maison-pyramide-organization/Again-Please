"use client";
import s from "../_s.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import Iline from "@a/icons/why-line.svg";

export default function Why() {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

  useGSAP(() => {
    const $why_line = document.getElementById("why-line") as HTMLElement;
    const $why_path = $why_line.querySelector("path");

    const texts_tl = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          ease: "power1.inOut",
          opacity: 0,
          y: "30",
        },
      })
      .from("[g-s='w-1']", {}, 0)
      .from("[g-s='w-2']", {}, 0.29)
      .from("[g-s='w-3']", {}, 0.52)
      .from("[g-s='w-4']", {}, 0.75)
      .from("[g-s='w-5']", {}, 0.99);

    const circles_tl = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to("#marker-1", {}, 0)
      .to("#marker-2", {}, 0.29)
      .to("#marker-3", {}, 0.52)
      .to("#marker-4", {}, 0.75)
      .to("#marker-5", {}, 0.99);

    const why_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: $why_line,
        scrub: true,
        start: "top center",
        end: "bottom center",
        // markers: true,
      },
    });
    why_tl
      .from($why_path, { drawSVG: 0, ease: "none" })
      .add(circles_tl, 0)
      .add(texts_tl, 0);
  });

  return (
    <section className={s["s-w"]}>
      <h2 a-t="r">
        WHY CHOOSE
        <br />
        CIRCULAR? 
      </h2>

      <div className={s.c}>
        <div g-s="w-1">
          <span>01</span>
          <p>Circular economy that works in the real world</p>
        </div>
        <div g-s="w-2">
          <span>02</span>
          <p>Cut single-use waste and carbon emissions</p>
        </div>
        <div g-s="w-3">
          <span>03</span>
          <p>Simplify compliance with regulations</p>
        </div>
        <div g-s="w-4">
          <span>04</span>
          <p>Elevate your guest experience with premium packaging</p>
        </div>
        <div g-s="w-5">
          <span>05</span>
          <p>Build measurable ESG impact</p>
        </div>
        <Iline id="why-line" />
      </div>
    </section>
  );
}
