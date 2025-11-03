"use client";
import Link from "next/link";
import s from "./_s.module.css";
import Image from "next/image";
import logoI from "@a/images/logo.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  // if (path == "/") return;

  return (
    <>
      <div className={s["h-ph"]} />
      <header className={s.h}>
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
      </header>
    </>
  );
}
