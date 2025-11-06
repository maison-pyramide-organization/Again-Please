import s from "../_s.module.css";
import ILine from "@a/icons/hero-line.svg";
import logoI from "@a/icons/lo-logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="s-he" className={s["s-he"]}>
      <Image g-s="he-logo" src={logoI} alt="again,please" />
      <div className={s.c}>
        <h1 g-s="he-t1" className={s.t1}>
          DESIGNED FOR REUSE
        </h1>
        <h1 g-s="he-t2" className={s.t2}>
          END-TO-END REUSABLE PACKAGING SOLUTIONS FOR EVENTS, VENUES & HORECA
          SPACES 
        </h1>
      </div>

      <div id="he-line">
        <ILine />
      </div>
    </section>
  );
}
