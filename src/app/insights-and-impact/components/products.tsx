"use client";

import s61I from "@im/insights/s61.png";
import s62I from "@im/insights/s62.png";
import s63I from "@im/insights/s63.png";
import s64I from "@im/insights/s64.png";
import Image from "next/image";
import IcArr from "@a/icons/c-arr.svg";
import { useRef } from "react";

export default function Products() {
  const listR = useRef(null) as any;
  const scrollVR = useRef(0);

  const onBtnClick = (d) => {
    const list = listR.current;
    const liW = list.querySelector("li").offsetWidth;
    const itemsCount = list.querySelectorAll("li").length;

    const maxScroll = -(itemsCount - 1) * liW;

    let next = d === "prev" ? scrollVR.current + liW : scrollVR.current - liW;

    if (next > 0) next = 0;
    if (next < maxScroll) next = maxScroll;

    list.style.transform = `translateX(${next}px)`;
    scrollVR.current = next;
  };

  return (
    <>
      <div>
        <ul ref={listR}>
          <li>
            <figure a-i="r">
              <Image
                src={s61I}
                alt="Again, Please"
                quality={90}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </figure>
          </li>
          <li>
            <figure a-i="r">
              <Image
                src={s62I}
                sizes="(max-width: 768px) 100vw, 1200px"
                alt="Again, Please"
                quality={90}
              />
            </figure>
          </li>
          <li>
            <figure a-i="r">
              <Image src={s63I} width={800} alt="Again, Please" quality={90} />
            </figure>
          </li>
          <li>
            <figure a-i="r">
              <Image src={s64I} width={800} alt="Again, Please" quality={90} />
            </figure>
          </li>
        </ul>
      </div>
      <nav className="m-o">
        <IcArr onClick={() => onBtnClick("prev")} />
        <IcArr onClick={() => onBtnClick("next")} />
      </nav>
    </>
  );
}
