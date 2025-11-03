import s from "../_s.module.css";
import iS1 from "@a/images/sector-1.png";
import iS2 from "@a/images/sector-2.png";
import iS3 from "@a/images/sector-3.png";
import Image from "next/image";

export default function Sectors() {
  return (
    <section className={s["s-s"]}>
      <div className={s.l}>
        <h2 a-t="r">SECTORS WE SERVE</h2>
      </div>
      <div className={s.r}>
        <ul>
          <li>
            <span a-t="r">01</span>
            <Image a-i="r" src={iS1} alt="" />
            <p a-t="r">
              Event Venues, Arenas, Entertainment Parks, Exhibition Centers
            </p>
          </li>
          <li>
            <span a-t="r">02</span>
            <Image a-i="r" src={iS2} alt="" />
            <p a-t="r">HoReCa Chains</p>
          </li>
          <li>
            <span a-t="r">03</span>
            <Image a-i="r" src={iS3} alt="" />
            <p a-t="r">
              SMEs including independent venues, smaller HoReCa spaces.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
