"use client";
import gsap from "gsap";
import s from "../_s.module.css";
import { useEffect, useRef } from "react";

export default function Slider() {
  let xPercent = 0;
  let direction = -1;

  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);

  useEffect(() => {
    let frameId: number;
    const loop = () => {
      animation();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(p1.current, {
      xPercent: xPercent,
    });
    gsap.set(p2.current, {
      xPercent: xPercent,
    });
    gsap.set(p3.current, {
      xPercent: xPercent,
    });
    gsap.set(p4.current, {
      xPercent: xPercent,
    });
    xPercent += 0.4 * direction;
  };

  return (
    <div className={s.slider}>
      <div className={s.slider_}>
        <p ref={p1}>STAY IN THE LOOP</p>
        <p ref={p2}>STAY IN THE LOOP</p>
        <p ref={p3}>STAY IN THE LOOP</p>
        <p ref={p4}>STAY IN THE LOOP</p>
      </div>
    </div>
  );
}
