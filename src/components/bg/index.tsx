import s from "./_s.module.css";
import bgI from "@a/images/bg.png";
import Image from "next/image";
import Animation from "./_animation";

export default function Bg() {
  return (
    <>
      <div className={s.bg_}>
        <figure id="bg" className={s.bg}>
          <Image src={bgI} alt="" />
        </figure>
      </div>
      <Animation />
    </>
  );
}
