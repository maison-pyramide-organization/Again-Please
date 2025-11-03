import Image from "next/image";
import s from "./_s.module.css";
import iLogo from "@a/images/logo.png";

export default function Footer() {
  return (
    <footer className={s.f}>
      <div>2025 All rights reserved</div>
      <div>
        <Image src={iLogo} alt="Again Please Logo" />
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/company/again-please">
          Linkedin
        </a>
        <span>|</span>
        <a target="_blank" href="https://www.instagram.com/againpleaseco">
          Instagram
        </a>
        <span>|</span>
        <a target="_blank" href="https://www.tiktok.com/@againpleaseco">
          Tiktok
        </a>
        <span>|</span>
        <a target="_blank" href="https://www.facebook.com/againpleaseco">
          Facebook
        </a>
        <span>|</span>
        <a
          target="_blank"
          href="https://x.com/againpleaseco?s=21&t=5vfxftGUvF7w8oIiPXz7jA"
        >
          X
        </a>
      </div>
    </footer>
  );
}
