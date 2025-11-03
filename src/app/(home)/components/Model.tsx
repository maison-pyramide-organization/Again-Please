"use client";

import model from "@/data/model";
import s from "../_s.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Model() {
  const [activeInd, setActiveInd] = useState(0);

  return (
    <section id="s-m" className={s["s-m"]}>
      <div className={s.h}>
        <h2 a-t="r">
          ONE PARTNER
          <span>EVERY STOP COVERED.</span>
        </h2>
        <p a-t="r">
          We handle your reusable packaging solution from start to finish so you
          can focus on your guests and operations.
        </p>
      </div>
      <h2>THE MODEL</h2>
      <div className={s.c}>
        <ul>
          {model.map((_, i) => (
            <li
              key={i}
              className={i == activeInd ? s.active : ""}
              onMouseEnter={() => setActiveInd(i)}
            >
              <span>0{i + 1}</span>
              <h3>{_.title}</h3>
            </li>
          ))}
        </ul>
        <div className={s.txts}>
          {model.map((_, i) => (
            <p className={i == activeInd ? s.active : ""} key={i}>
              <span>{_.p_title}</span>
              {_.p_body}
            </p>
          ))}
        </div>
        <div className={s.imgs}>
          {model.map((_, i) => (
            <figure className={i == activeInd ? s.active : ""} key={i}>
              <Image src={_.image} alt={_.title} />
            </figure>
          ))}
        </div>
      </div>
      <div className={s.b}>
        LESS WASTE, LOWER LONG-TERM COSTS, AND A POWERFUL CIRCULAR ECONOMY/
        SUSTAINABILITY STORY.
      </div>
    </section>
  );
}
