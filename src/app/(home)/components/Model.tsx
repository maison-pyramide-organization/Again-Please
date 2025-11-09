"use client";

import s from "../_s.module.css";
import model from "@/data/model";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Iarr from "@a/icons/arr.svg";
import { DimensionContext } from "@/contexts/dimensionsContext";

export default function Model() {
  const [activeInd, setActiveInd] = useState(-1);
  const { isMobile } = useContext(DimensionContext);

  useEffect(() => {
    if (!isMobile) setActiveInd(0);
  }, []);

  const onMouseEnter = (ind) => {
    if (isMobile) return;
    setActiveInd(ind);
  };
  const onClick = (ind) => {
    if (!isMobile) return;
    if (activeInd == ind) setActiveInd(-1);
    else setActiveInd(ind);
  };

  return (
    <section id="s-m" className={s["s-m"]}>
      <div className={s.h}>
        <h2 a-t="r">
          ONE PARTNER.
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
              onMouseEnter={() => onMouseEnter(i)}
              onClick={() => onClick(i)}
            >
              {/* <div className={s.h}> */}
              <span>0{i + 1}</span>
              <h3>{_.title}</h3>
              <Iarr className={i == activeInd ? s.active : ""} />
              {/* </div> */}
              <div className={s.co}>
                <p>
                  <span>{_.p_title}</span>
                  {_.p_body}
                </p>
                <figure className={i == activeInd ? s.active : ""} key={i}>
                  <Image src={_.image} alt={_.title} />
                </figure>
              </div>
            </li>
          ))}
        </ul>

        <div className={s.b}>
          LESS WASTE, LOWER LONG-TERM COSTS, AND A POWERFUL CIRCULAR ECONOMY
          STORY.
        </div>
      </div>
    </section>
  );
}
