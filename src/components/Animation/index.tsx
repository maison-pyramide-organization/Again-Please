"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase } from "gsap/all";
import { usePathname } from "next/navigation";

export default function Animation() {
  const pathname = usePathname();

  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    SplitText,
    DrawSVGPlugin,
    CustomEase
  );

  const animation = () => {
    ////////////////
    // GLOBAL
    ////////////////

    // Images
    gsap.utils.toArray('[a-i="r"]').forEach((el: any) => {
      gsap.from(el, {
        duration: 1,
        opacity: 0,
        ease: "sine.out",
        //   ease: "io2",
        scrollTrigger: {
          trigger: el, // 👈 each element triggers its own animation
          start: "top 90%",
        },
      });
    });

    // Texts
    gsap.utils.toArray('[a-t="r"]').forEach((el: any) => {
      const t_split = SplitText.create(el, { type: "lines", mask: "lines" });
      gsap.from(t_split.lines, {
        y: "100%",
        duration: 0.4,
        ease: "sine.out",
        stagger: {
          each: 0.1,
        },
        scrollTrigger: {
          trigger: el, // 👈 each element triggers its own animation
          start: "top 90%",
        },
      });
    });

    // Page
    gsap.set("#p_", {
      autoAlpha: 1,
    });
  };

  useGSAP(() => {
    document.fonts.ready
      .then(() => {
        animation();
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  }, [pathname]);

  return null;
}
