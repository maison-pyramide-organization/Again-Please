import s from "../_s.module.css";

export default function Header() {
  return (
    <div className={s.h}>
      <nav>
        <a href="">In the press</a>
        <a href="">Blog</a>
        <a href="">Perspectives</a>
        <a href="">All</a>
      </nav>
      <p>
        <span>Discover the latest from Again, Please</span>
        From major activations to measurable circular impact at scale.
      </p>
    </div>
  );
}
