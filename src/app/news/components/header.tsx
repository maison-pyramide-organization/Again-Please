import s from "../_s.module.css";

export default function Header() {
  return (
    <div className={s.h}>
      <nav className="d-o">
        <a href="#press">In the press</a>
        <a href="#blogs">Blog</a>
        <a href="#events">Events</a>
      </nav>
      <p>
        <span>Discover the latest from Again, Please</span>
        From major activations to measurable circular impact at scale.
      </p>
    </div>
  );
}
