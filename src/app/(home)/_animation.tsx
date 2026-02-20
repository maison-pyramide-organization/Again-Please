"use client";

import { DimensionContext } from "@/contexts/dimensionsContext";
import { FontsContext } from "@/contexts/fontsContext";
import { imagesA, textsA } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase } from "gsap/all";
import { useContext } from "react";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  CustomEase,
);

export default function Animation() {
  const { loaded } = useContext(FontsContext);
  const { isMobile } = useContext(DimensionContext);

  // BG
  const bgA = () => {
    const $bg = document.getElementById("bg");
    if (!$bg) return;

    // HERO SECTION
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: "#s-he",
        start: "top top",
        endTrigger: "#s-s",
        // end: "bottom bottom",
        end: "top top",
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
      })
      .to("#bg", {
        top: "-550rem",
        left: "-280rem",
        width: "2000rem",
      });

    // MODEL SECTION
    const t2 = gsap.to($bg, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#s-m",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // QUOTE & FOOTER
    const t3 = gsap.to($bg, {
      opacity: 1,
      top: "-190rem",
      left: "-680rem",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#s-q",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  };

  const bgAM = () => {
    gsap.set("#bg", {
      width: "1500rem",
    });

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

    gsap.to("#bg", {
      opacity: 1,
      top: "-90rem",
      left: "-360rem",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#s-q",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  };

  // Header
  const headerA = () => {
    gsap.from("#h", {
      autoAlpha: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: '[g-s="he-logo"]',
        endTrigger: "#s-s",
        start: "bottom top",
        end: "top top",
        toggleActions: "play reverse play reverse",
      },
    });
  };

  // Hero
  const heroA = () => {
    const $p_ = document.getElementById("p_") as HTMLElement;
    const $he_t1 = document.querySelector("[g-s='he-t1']");
    const he_t2_split = SplitText.create("[g-s='he-t2']", { type: "lines" });

    gsap.set($p_, { autoAlpha: 1 });

    const lo_tl = gsap.timeline();

    const he_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '[g-s="he-line-d"] path:last-child',
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    he_tl
      .from(
        '[g-s="he-line-d"] path:last-child',
        { drawSVG: "0", ease: "none", duration: 4 },
        0,
      )
      .from(
        $he_t1,
        {
          y: "150%",
          opacity: 0,
        },
        0,
      )
      .to(
        $he_t1,
        {
          y: "-120%",
          opacity: 0,
        },
        1,
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
        2,
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
        3,
      );

    lo_tl
      .from('[g-s="he-line-d"] path', {
        drawSVG: 0,
        duration: 1,
        onComplete: () => {
          $p_.classList.remove("d-s");
        },
      })
      .add(he_tl, 0);

    // gsap.to($he_logo, {
    //   autoAlpha: 0,
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: "#s-a",
    //     toggleActions: "play none none reverse",
    //     start: "top bottom",
    //     end: "top 80%",
    //     scrub: true,
    //   },
    // });
  };

  const heroAM = () => {
    const $p_ = document.getElementById("p_") as HTMLElement;
    $p_.classList.remove("d-s");

    const $he_t1 = document.querySelector("[g-s='he-t1']");
    const he_t2_split = SplitText.create("[g-s='he-t2']", { type: "lines" });

    const lo_tl = gsap.timeline();

    const he_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '[g-s="he-line-m"] path:last-child',
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    he_tl
      .from("[g-s='he-line-m'] path:last-child", {
        drawSVG: "0",
        duration: 4,
        ease: "sine.in",
      })
      .from(
        $he_t1,
        {
          y: "150%",
          opacity: 0,
        },
        0,
      )
      .to(
        $he_t1,
        {
          y: "-120%",
          opacity: 0,
        },
        1,
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
        2,
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
        3,
      )
      .from("[g-s='he-ab']", {
        y: "80%",
        opacity: 0,
      })
      .to("[g-s='he-ab']", {
        y: "-80%",
        opacity: 0,
      });

    lo_tl
      .from('[g-s="he-line-m"] path', {
        drawSVG: 0,
        duration: 1,
        onComplete: () => {
          $p_.classList.remove("d-s");
        },
      })
      .add(he_tl, 0);
  };

  // About
  const aboutA = () => {
    // CustomEase.create("io2", ".45,0,.55,1");
    const $ab_line = document.getElementById("ab-line") as HTMLElement;
    const $ab_path = $ab_line?.querySelector("path") as any;

    const $ab_t1 = document.querySelector('#s-a [g-s="ab-t1"]');
    const $ab_t2 = document.querySelector('#s-a [g-s="ab-t2"]');

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
      },
    });
  };

  // Why
  const whyA = () => {
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
          autoAlpha: 0,
          // transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .from("#marker-1 ", {}, 0)
      .from("#marker-2", {}, 0.29)
      .from("#marker-3", {}, 0.52)
      .from("#marker-4", {}, 0.75)
      .from("#marker-5", {}, 0.99);

    const why_tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "[g-s='why-line-d']",
        scrub: true,
        start: "top 80%",
        end: "bottom center",
        // markers: true,
      },
    });
    why_tl
      .from('[g-s="why-line-d"] path', { drawSVG: 0, ease: "none" })
      .add(circles_tl, 0)
      .add(texts_tl, 0);
  };

  const whyAM = () => {
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
        trigger: "[g-s='why-line-m']",
        scrub: true,
        start: "top 70%",
        end: "bottom center",
      },
    });
    why_tl
      .from('[g-s="why-line-m"] path', { drawSVG: 0, ease: "none" })
      .add(circles_tl, 0)
      .add(texts_tl, 0);
  };

  const initA = () => {
    // Page
    gsap.set("#p_", {
      autoAlpha: 1,
    });
  };

  useGSAP(() => {
    if (!loaded) return;

    // document.fonts.ready.then(() => {
    initA();
    textsA();
    imagesA();
    headerA();
    isMobile ? bgAM() : bgA();
    isMobile ? heroAM() : heroA();
    !isMobile && aboutA();
    isMobile ? whyAM() : whyA();
    // });
  }, [loaded]);

  return null;
}
