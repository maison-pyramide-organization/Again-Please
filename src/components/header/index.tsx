"use client";
import s from "./_s.module.css";
import Link from "next/link";
import Image from "next/image";
import logoI from "@a/images/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import bgI from "@a/images/bg.png";
import { useLenis } from "lenis/react";

export default function Header() {
  const path = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  const lenis = useLenis();

  const handleClick = () => {
    const next = !isOpened;
    setIsOpened(next);

    // toggle class based on the new state
    document.body.classList.toggle("d-s", next);

    // call lenis based on the new state
    if (next) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  };

  return (
    <>
      {/* {path != "/" && <div className={s["h-ph"]} />} */}
      <header id="h" className={`${s.h} ${path == "/" ? "fixed" : ""}`}>
        <Link className={s.l} href="/">
          <Image src={logoI} alt="Again Please Logo" />
        </Link>

        <nav>
          <Link
            className={`${s.l} ${path == "/about" ? "active" : ""} `}
            href="/about"
          >
            About us
          </Link>
          <Link
            className={`${s.l} ${path == "/contact-us" ? "active" : ""}`}
            href="/contact-us"
          >
            Contact us
          </Link>
        </nav>

        <button id="menu-btn" onClick={handleClick}>
          <div className={`${s.menu_i} ${isOpened ? s.open : ""}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>
      {isOpened && (
        <div className={s.menu}>
          <Link href="/about" onClick={handleClick}>
            About us
          </Link>
          <Link href="/contact-us" onClick={handleClick}>
            Contact us
          </Link>
          <figure className={s.bg}>
            <Image src={bgI} alt="again please" />
          </figure>
        </div>
      )}
    </>
  );
}
