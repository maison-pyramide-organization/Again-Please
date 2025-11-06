import s from "./_s.module.css";
import bgI from "@a/images/bg.png";
import Image from "next/image";
import Animation from "./_animation";

export default function Bg() {
  // const homeA = () => {
  //   const $bg = bgR.current as HTMLElement;

  //   gsap.set($bg, {
  //     width: "1000rem",
  //   });

  //   // Hero
  //   // gsap.to($bg, {
  //   //   opacity:0,
  //   //   scrollTrigger: {
  //   //     trigger: "[g-s='he-lo']",
  //   //     start: "bottom top",
  //   //     scrub: true,
  //   //   },
  //   // });

  //   // Sectors
  //   gsap.to($bg, {
  //     width: "1800",
  //     scrollTrigger: {
  //       trigger: "#s-s",
  //       start: "top bottom",
  //       end: "top top",
  //       scrub: true,
  //     },
  //   });

  //   // Model
  //   gsap.to($bg, {
  //     width: "100%",
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: "#s-m",
  //       start: "top bottom",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });

  //   // Footer
  //   gsap.to($bg, {
  //     opacity: 1,
  //     x: "-40%",
  //     y: "20%",
  //     scrollTrigger: {
  //       trigger: "#s-q",
  //       start: "top center",
  //       end: "bottom 80%",
  //       scrub: true,
  //     },
  //   });
  // };

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
