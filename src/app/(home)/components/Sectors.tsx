"use client";
import s from "./sectors.module.css";
import Ichev from "@a/icons/chev.svg";
import { useRef } from "react";

export default function Sectors(props: any) {
  let { sectors } = props;

  sectors = sectors.sort((a, b) => a.index - b.index);

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
    <section id="s-s" className={s["s-s"]}>
      <div className={s.l}>
        <h2 a-t="r">SECTORS WE SERVE</h2>
      </div>
      <div className={s.r}>
        <nav>
          <Ichev onClick={() => onBtnClick("prev")} />
          <Ichev onClick={() => onBtnClick("next")} />
        </nav>
        <ul ref={listR}>
          {sectors.map((sector) => (
            <li key={sector.index}>
              <span a-t="r">0{sector.index}</span>
              <figure>
                <img
                  a-i="r"
                  src={`https:${sector.smallImage?.fields.file.url}`}
                  alt={sector.name}
                />
                <img
                  a-i="r"
                  src={`https:${sector.largeImage?.fields.file.url}`}
                  alt={sector.name}
                />
              </figure>
              <p a-t="r">{sector.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
