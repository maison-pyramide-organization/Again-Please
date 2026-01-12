"use client";

import { useGSAP } from "@gsap/react";
import s from "./_s.module.css";
import p1I from "@im/products/p1.png";
import p2I from "@im/products/p2.png";
import p3I from "@im/products/p3.png";
import p4I from "@im/products/p4.png";
import p5I from "@im/products/p5.png";
import p6I from "@im/products/p6.png";
import p7I from "@im/products/p7.png";
import p8I from "@im/products/p8.png";
import p9I from "@im/products/p9.png";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

const products = [
  {
    img: p1I,
    width: 120,
    widthM: 70,
  },
  {
    img: p2I,
    width: 120,
    widthM: 70,
  },
  {
    img: p3I,
    width: 120,
    widthM: 70,
  },
  {
    img: p4I,
    width: 235,
    widthM: 125,
  },
  {
    img: p5I,
    width: 140,
    widthM: 84,
  },
  {
    img: p6I,
    width: 120,
    widthM: 70,
  },
  {
    img: p7I,
    width: 260,
    widthM: 145,
  },
  {
    img: p8I,
    width: 120,
    widthM: 70,
  },
  {
    img: p9I,
    width: 120,
    widthM: 70,
  },
];
export default function ProductsMarquee() {
  const productsCRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    const setTl = () => {
      tl.current?.kill();
      gsap.set(productsCRef.current, {
        xPercent: 0,
      });
      tl.current = gsap
        .timeline({ defaults: { ease: "none", repeat: -1 } })
        .to(productsCRef.current, {
          xPercent: -50,
          duration: 20,
        })
        .set(productsCRef.current, { x: 0 });
    };
    setTl();
  }, []);

  return (
    <>
      <div className={s.pm}>
        <div className={s.pm_c} ref={productsCRef}>
          <ul>
            {products.map((p, i) => (
              <li key={i}>
                <Image
                  src={p.img}
                  alt="again please cup"
                  style={
                    {
                      "--w": `${p.width}rem`,
                      "--wm": `${p.widthM}rem`,
                    } as React.CSSProperties
                  }
                />
              </li>
            ))}
          </ul>
          <ul>
            {products.map((p, i) => (
              <li key={i}>
                <Image
                  src={p.img}
                  alt="again please cup"
                  style={
                    {
                      "--w": `${p.width}rem`,
                      "--wm": `${p.widthM}rem`,
                    } as React.CSSProperties
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
