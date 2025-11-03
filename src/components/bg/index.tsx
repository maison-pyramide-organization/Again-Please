"use client";
import bgI from "@a/images/bg.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Bg() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {});
  return (
    <div className="bg_">
      <figure className="bg">
        <Image src={bgI} alt="" />
      </figure>
    </div>
  );
}
