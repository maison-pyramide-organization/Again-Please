"use client";
import s from "../_s.module.css";
import iS1 from "@a/images/sector-1.png";
import iS2 from "@a/images/sector-2.png";
import iS3 from "@a/images/sector-3.png";
import Image from "next/image";
import Ichev from "@a/icons/chev.svg";
import { useRef } from "react";

export default function Sectors() {
  const listR = useRef(null) as any;
  const scrollVR = useRef(0);

  const onBtnClick = (d) => {
    const $list = listR.current;
    const liW = $list.querySelector("li").offsetWidth;
    const itemsCount = $list.querySelectorAll("li").length;

    const scrollV = scrollVR.current;

    // total scrollable width (excluding the last visible item)
    const maxScroll = (itemsCount - 1) * liW * -1; // negative value

    // calculate new position
    let newScrollV = d === "prev" ? scrollV + liW : scrollV - liW;

    // clamp between 0 (start) and maxScroll (end)
    if (newScrollV > 0) newScrollV = 0;
    if (newScrollV < maxScroll) newScrollV = maxScroll;

    // apply transform
    $list.style.transform = `translateX(${newScrollV}px)`;
    $list.style.transition = "transform 0.2s ease";

    // save scroll position
    scrollVR.current = newScrollV;
  };

  return (
    <section className={s["s-s"]}>
      <div className={s.l}>
        <h2 a-t="r">
          SECTORS <br />
          WE SERVE
        </h2>
      </div>
      <div className={s.r}>
        <nav>
          <Ichev onClick={() => onBtnClick("prev")} />
          <Ichev onClick={() => onBtnClick("next")} />
        </nav>
        <ul ref={listR}>
          <li>
            <span a-t="r">01</span>
            <Image a-i="r" src={iS1} alt="" />
            <p a-t="r">
              Event Venues, Arenas, Entertainment Parks, Exhibition Centers
            </p>
          </li>
          <li>
            <span a-t="r">02</span>
            <Image a-i="r" src={iS2} alt="" />
            <p a-t="r">HoReCa Chains</p>
          </li>
          <li>
            <span a-t="r">03</span>
            <Image a-i="r" src={iS3} alt="" />
            <p a-t="r">
              SMEs including independent venues, smaller HoReCa spaces.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
