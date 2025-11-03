import Accordion from "@/components/accordion";
import s from "../_s.module.css";
import cupsI from "@a/images/about/cups.png";
import Image from "next/image";
import why from "@/data/why";

export default function Why() {
  return (
    <section className={s["s-w"]}>
      <h1 a-t="r">
        <span>WHY</span>
        AGAIN, PLEASE ? 
      </h1>
      <div>
        {why.map((w, i) => (
          <Accordion title={w.q} key={i}>
            <p>{w.a}</p>
          </Accordion>
        ))}
      </div>

      <figure>
        <Image src={cupsI} alt="Again Please Reusable Cups" />
      </figure>
    </section>
  );
}
