import s from "../_s.module.css";
import Iline from "@a/icons/about-line.svg";

export default function About() {
  return (
    <section id="s-a" className={s["s-a"]}>
      <div className={s.t1} a-t='r'>
        FROM DESIGN AND CUSTOMIZATION TO WASHING, LOGISTICS, AND REDISTRIBUTION.
      </div>
      <div className={s.t2} a-t="r">
        We partner with your business to eliminate single-use waste with
        seamless circular systems. 
      </div>

      {/* <button type="button">SEE HOW IT WORKS</button> */}
      <Iline id="ab-line" />
    </section>
  );
}
