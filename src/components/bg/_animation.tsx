"use client";

import { DimensionContext } from "@/contexts/dimensionsContext";
import { FontsContext } from "@/contexts/fontsContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Animation() {
  gsap.registerPlugin(ScrollTrigger);
  const path = usePathname();
  const { loaded } = useContext(FontsContext);
  const { isMobile } = useContext(DimensionContext);

  const homeA = () => {
    const $bg = document.getElementById("bg");
    if (!$bg) return;

    // --- timeline section
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: "#s-he",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to($bg, {
      top: "-50rem",
      left: "360rem",
    })
      .to($bg, {
        top: "200rem",
        left: "655rem",
      })
      .to($bg, {
        top: "105rem",
        left: "280rem",
      });

    // --- background move
    const t1 = gsap.to($bg, {
      top: "-550rem",
      left: "-280rem",
      width: "2000rem",
      immediateRender: false,
      ease: "none",
      scrollTrigger: {
        trigger: "#s-s",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    // --- fade out
    const t2 = gsap.to($bg, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#s-m",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    // --- fade in (Q section)
    const t3 = gsap.fromTo(
      $bg,
      {
        opacity: 0,
        top: "-190rem",
        left: "-680rem",
      },
      {
        opacity: 1,
        top: "-190rem",
        left: "-680rem",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#s-q",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
      }
    );
  };

  const homeAM = () => {
    gsap.set("#bg", {
      width: "1500rem",
    });
    // --- background move
    gsap.to("#bg", {
      top: "-180rem",
      left: "-440rem",
      immediateRender: false,
      ease: "none",
      scrollTrigger: {
        trigger: "#s-s",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to("#bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#s-m",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#bg",
      {
        opacity: 0,
        width: "1500rem",
        top: "-90rem",
        left: "-360rem",
      },
      {
        opacity: 1,
        top: "-90rem",
        left: "-360rem",
        duration: 0.3,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#s-q",
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          //   markers: true,
        },
      }
    );
  };

  const aboutA = () => {
    const t1 = gsap.set("#bg", {
      opacity: 1,
      top: "-45rem",
      left: "285rem",
      width: "1500rem",
    });

    const t2 = gsap.from("#bg", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    const t3 = gsap.to("#bg", {
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#s-w",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const t4 = gsap.fromTo(
      "#bg",
      {
        opacity: 0,
        width: "2000rem",
        top: "-20rem",
        left: "-1065rem",
      },
      {
        opacity: 1,
        top: "-20rem",
        left: "-1065rem",
        duration: 0.3,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#s-f",
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          //   markers: true,
        },
      }
    );
  };

  const aboutAM = () => {
    const t1 = gsap.set("#bg", {
      opacity: 1,
      top: "-40rem",
      left: "-395rem",
      width: "1300rem",
    });
  };

  const contactA = () => {
    gsap.set("#bg", {
      opacity: 1,
      top: "225rem",
      left: "-430rem",
      width: "1000rem",
    });
  };

  useGSAP(
    () => {
      // only run on home page

      if (!loaded || isMobile == null) return;
      if (path == "/") isMobile ? homeAM() : homeA();
      if (path == "/about") isMobile ? aboutAM() : aboutA();
      if (path == "/contact-us") contactA();
    },
    {
      dependencies: [path, loaded, isMobile],
      revertOnUpdate: true, // ensures cleanup when path changes
    }
  );

  return null;
}
