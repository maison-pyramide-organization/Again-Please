"use client";
import s from "../_s.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import IlineD from "@a/icons/why-line-d.svg";
import IlineM from "@a/icons/why-line-m.svg";

export default function Why() {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

  return (
    <section id="s-w" className={s["s-w"]}>
      <h2 a-t="r">
        WHY
        <br />
        CHOOSE US? 
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
        <IlineD id="why-line-d" />
        <IlineM id="why-line-m" />
      </div>
    </section>
  );
}
