import s from "./about.module.css";
import Iline from "@a/icons/about-line.svg";

export default function About() {
  return (
    <section id="s-a" className={s["s-a"]}>
      <div className={s.c}>
        <div g-s="ab-t1" className={s.t1}>
          AGAIN, PLEASE ELIMINATES SINGLE-USE WASTE THROUGH CIRCULAR REUSE
          SYSTEMS.
        </div>
        <div g-s="ab-t2" className={s.t2}>
          We replace single-use cups and food packaging with reusable ones,
          providing the complete ecosystem, from design and customization to
          logistics, industrial washing, tracking and redistribution.
        </div>
      </div>

      {/* <button type="button">SEE HOW IT WORKS</button> */}
      <Iline id="ab-line" />
    </section>
  );
}
