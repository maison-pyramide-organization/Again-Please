import s from "../_s.module.css";
import Image from "next/image";
import logoI from "@a/icons/lo-logo.png";
import ILine from "@a/icons/hero-line.svg";
import ILineM from "@a/icons/he-line-m.svg";

export default function Hero() {
  return (
    <section id="s-he" className={s["s-he"]}>
      <Image g-s="he-logo" src={logoI} alt="again,please" />
      <div className={s.c}>
        <h1 g-s="he-t1" className={s.t1}>
          DESIGNED FOR REUSE
        </h1>
        <h1 g-s="he-t2" className={s.t2}>
          END-TO-END REUSABLE FOODWARE PACKAGING SOLUTIONS FOR EVENTS, VENUES & HORECA
          SPACES 
        </h1>

        <div g-s="he-ab" className={s.he_ab}>
          <div g-s="ab-t1" className={s.t3}>
            FROM DESIGN AND CUSTOMIZATION TO WASHING, LOGISTICS, AND
            REDISTRIBUTION.
          </div>
          <div g-s="ab-t2" className={s.t4}>
            We partner with your business to eliminate single-use waste with
            seamless circular systems. 
          </div>
        </div>
      </div>

      <div id="he-line">
        <ILineM g-s="he-line-m" />
        <ILine g-s="he-line-d" />
      </div>
    </section>
  );
}
