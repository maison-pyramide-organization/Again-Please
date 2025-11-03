"use client";

import s from "./_s.module.css";
import { useRef, useState } from "react";
import Iplus from "@a/icons/plus.svg";

export default function Accordion(props: any) {
  const { title, children } = props;
  const [active, setActive] = useState(false);
  const itemBodyW = useRef<any>(null);

  const handleClick = () => {
    const $itemBodyW = itemBodyW.current;
    if (!active) {
      const itemBodyH = $itemBodyW.firstChild.clientHeight;
      $itemBodyW.style.height = `${itemBodyH}px`;
    } else {
      $itemBodyW.style.height = `0px`;
    }
    setActive(!active);
  };

  return (
    <div onClick={handleClick}>
      <div className={s.item_t}>
        <span>{title}</span>
        <Iplus className={active ? "active" : ""} />
      </div>

      <div className={s.item_b_} ref={itemBodyW}>
        <div className={s.item_b}>{children}</div>
      </div>
    </div>
  );
}
