import s from "./_s.module.css";
import bgI from "@a/images/bg.png";
import Image from "next/image";

export default function Bg() {
  return (
    <div className={s.bg_}>
      <figure id="bg" className={s.bg}>
        <Image src={bgI} alt="Again, Please" loading="lazy" />
      </figure>
    </div>
  );
}
