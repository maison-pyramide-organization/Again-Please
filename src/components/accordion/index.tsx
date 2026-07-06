"use client";

import s from "./_s.module.css";
import { useRef, useState } from "react";
import Iplus from "@a/icons/plus.svg";
import Iminus from "@a/icons/minus.svg";

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
    <div className="acc" onClick={handleClick}>
      <div className={`acc_h ${s.item_t}`}>
        <span className="acc_title">{title}</span>
        {active ? <Iminus /> : <Iplus />}
      </div>

      <div className={`acc_b_ ${s.item_b_}`} ref={itemBodyW}>
        <div className={`acc_b ${s.item_b}`}>{children}</div>
      </div>
    </div>
  );
}
