"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase } from "gsap/all";

export default function Animation() {
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    SplitText,
    DrawSVGPlugin,
    CustomEase
  );

  const headerA = () => {
    gsap.from("#h", {
      autoAlpha: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#s-a",
        // endTrigger:'#s-s',
        start: "top center",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });

    // gsap.to("#h", {
    //   autoAlpha: 0,
    //   scrollTrigger: {
    //     trigger: "#s-a",
    //     start: "top center",
    //     end: "bottom top",
    //     toggleActions: "play none none reverse",
    //     markers: true,
    //   },
    // });
  };

  // Hero
  const heroA = () => {
    const $p_ = document.getElementById("p_") as HTMLElement;
    const $he_line = document.getElementById("he-line") as HTMLElement;
    const $he_path1 = $he_line?.querySelector("path") as any;
    const $he_path2 = $he_line?.querySelector("path:last-child") as any;
    const $he_t1 = document.querySelector("[g-s='he-t1']");
    const he_t2_split = SplitText.create("[g-s='he-t2']", { type: "lines" });
    const $he_logo = document.querySelector("[g-s='he-logo']") as any;

    gsap.set($p_, { autoAlpha: 1 });

    const lo_tl = gsap.timeline();

    const he_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: $he_path2,
        scrub: true,
        start: "top 90%",
        end: "bottom 80%",
        // markers: true,
      },
    });

    // .from($he_path2, { drawSVG: "0", duration: 4 })
    he_tl
      .fromTo(
        $he_path2,
        { drawSVG: "0%" },
        { drawSVG: "100%", ease: "none", duration: 4 },
        0
      )
      .from(
        $he_t1,
        {
          y: "150%",
          opacity: 0,
        },
        0
      )
      .to(
        $he_t1,
        {
          y: "-120%",
          opacity: 0,
        },
        1
      )
      .from(
        he_t2_split.lines,
        {
          y: "150%",
          opacity: 0,
          stagger: {
            each: 0.1,
          },
        },
        2
      )
      .to(
        he_t2_split.lines,
        {
          y: "-120%",
          opacity: 0,
          stagger: {
            each: 0.1,
          },
        },
        3
      );

    lo_tl
      .from($he_path1, {
        drawSVG: 0,
        duration: 2,
        onComplete: () => {
          $p_.classList.remove("d-s");
        },
      })
      .add(he_tl, 0);

    gsap.to($he_logo, {
      autoAlpha: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#s-a",
        toggleActions: "play none none reverse",
        start: "top bottom",
        end: "top 80%",
        scrub: true,
      },
    });
  };

  // About
  const aboutA = () => {
    // CustomEase.create("io2", ".45,0,.55,1");
    const $ab_line = document.getElementById("ab-line") as HTMLElement;
    const $ab_path = $ab_line?.querySelector("path") as any;
    const $ab_t1 = document.querySelector('[g-s="ab-t1"]');
    const $ab_t2 = document.querySelector('[g-s="ab-t2"]');

    gsap.from($ab_t1, {
      x: "-50%",
      opacity: 0,
      scrollTrigger: {
        trigger: $ab_t1,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });
    gsap.from($ab_t2, {
      x: "50%",
      opacity: 0,
      scrollTrigger: {
        trigger: $ab_t2,
        start: "top 90%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from($ab_path, {
      drawSVG: 0,
      scrollTrigger: {
        trigger: $ab_line,
        scrub: true,
        start: "top 70%",
        end: "center 10% ",
        // markers: true,
      },
    });
  };

  // Why
  const whyA = () => {
    const $why_line = document.getElementById("why-line-d") as HTMLElement;
    const $why_path = $why_line.querySelector("path");

    const texts_tl = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          ease: "power1.inOut",
          opacity: 0,
          y: "30",
        },
      })
      .from("[g-s='w-1']", {}, 0)
      .from("[g-s='w-2']", {}, 0.29)
      .from("[g-s='w-3']", {}, 0.52)
      .from("[g-s='w-4']", {}, 0.75)
      .from("[g-s='w-5']", {}, 0.99);

    const circles_tl = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to("#marker-1", {}, 0)
      .to("#marker-2", {}, 0.29)
      .to("#marker-3", {}, 0.52)
      .to("#marker-4", {}, 0.75)
      .to("#marker-5", {}, 0.99);

    const why_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: $why_line,
        scrub: true,
        start: "top center",
        end: "bottom center",
        // markers: true,
      },
    });
    why_tl
      .from($why_path, { drawSVG: 0, ease: "none" })
      .add(circles_tl, 0)
      .add(texts_tl, 0);
  };

  useGSAP(() => {
    document.fonts.ready
      .then(() => {
        headerA();
        heroA();
        aboutA();
        whyA();
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  });

  return null;
}
