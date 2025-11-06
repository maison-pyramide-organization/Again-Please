"use client";

import { FontsContext } from "@/contexts/fontsContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Animation() {
  const path = usePathname();
  const { loaded } = useContext(FontsContext);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const animation = () => {
    const $p_ = document.getElementById("p_") as HTMLElement;
    $p_.classList.remove("d-s");
  };

  useGSAP(
    () => {
      if (!loaded) return;
      animation();
    },
    {
      dependencies: [path, loaded],
      revertOnUpdate: true, // ensures cleanup when path changes
    }
  );

  return null;
}
