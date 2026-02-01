import s from "./quote.module.css";
import Link from "next/link";

export default function Quote() {
  return (
    <section id="s-q" className={s["s-q"]}>
      <h2 a-t="r">
        READY TO <br /> GO CIRCULAR?
      </h2>
      <p a-t="r">
        Contact us to design a reusable system that fits your operations 
      </p>
      <button>
        <Link href="/contact-us">REQUEST A QUOTE</Link>
      </button>
    </section>
  );
}
