"use client";
import s from "../_s.module.css";

import { useEffect, useRef } from "react";

export default function HeroVid() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 770;

    const src = isMobile ? "/videos/ap-m.mp4" : "/videos/ap-animation.mp4";

    if (!videoRef.current) return;

    videoRef.current.src = src;
    videoRef.current.load();
  }, []);

  return (
    <>
      <figure>
        <video ref={videoRef} className={s.v} autoPlay loop muted playsInline />
      </figure>
    </>
  );
}
