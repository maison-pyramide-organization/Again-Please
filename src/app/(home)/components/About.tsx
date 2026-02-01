import s from "./about.module.css";
import Iline from "@a/icons/about-line.svg";

export default function About() {
  return (
    <section id="s-a" className={s["s-a"]}>
      <div className={s.c}>
        <div g-s="ab-t1" className={s.t1}>
          FROM DESIGN AND CUSTOMIZATION TO WASHING, LOGISTICS, AND
          REDISTRIBUTION.
        </div>
        <div g-s="ab-t2" className={s.t2}>
          We partner with your business to eliminate single-use waste with
          seamless circular systems. 
        </div>
      </div>

      {/* <button type="button">SEE HOW IT WORKS</button> */}
      <Iline id="ab-line" />
    </section>
  );
}
