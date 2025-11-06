import s from "./_s.module.css";
import testI from "@a/images/te.png";
import Image from "next/image";

export default function Test() {
  return (
    <>
      <div className={s._}>
        <figure>
          <Image src={testI} alt="" />
        </figure>
      </div>
    </>
  );
}
