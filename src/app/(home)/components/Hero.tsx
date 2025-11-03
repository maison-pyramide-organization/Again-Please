import s from "../_s.module.css";
import ILine from "@a/icons/hero-line.svg";

export default function Hero() {
  return (
    <section className={s["s-he"]}>
      <div className={s.c}>
        <h1 g-s="he-t1" className={s.t1}>DESIGNED FOR REUSE</h1>
        <h1 g-s="he-t2" className={s.t2}>
          END-TO-END REUSABLE PACKAGING SOLUTIONS FOR EVENTS, VENUES & HORECA
          SPACES 
        </h1>
      </div>

      <div className={s.line_}>
        <ILine id="he-line" />
      </div>
    </section>
  );
}
