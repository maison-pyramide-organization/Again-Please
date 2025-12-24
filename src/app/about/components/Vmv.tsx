import s from "../_s.module.css";

export default function Vmv() {
  return (
    <section className={s["s-vmv"]}>
      {/* VISION */}
      <div className={s.vi}>
        <h2>
          OUR
          <span>VISION</span>
          <span className={s.l} />
        </h2>
        <p a-t="r">
          To redefine reusability by creating world-class circular ecosystem
          where every reuse reflects responsibility and elevates experiences 
        </p>
      </div>
      {/* MISSION */}
      <div className={s.mi}>
        <h2>
          OUR
          <span>MISSION</span>
          <span className={s.l} />
        </h2>
        <p a-t="r">
          To deliver end-to-end circular solutions empowering businesses and
          communities to move seamlessly beyond single use & set a new benchmark
          for reusability 
        </p>
      </div>

      {/* VALUES */}

      <div className={s.va}>
        <h2>
          OUR
          <span>VALUES</span>
          <span className={s.l} />
        </h2>
        <ul>
          <li a-t="r">
            <h3>Hygiene uncompromised</h3>
            <p>Every return, every wash spotless, safe, and ready</p>
          </li>
          <li a-t="r">
            <h3>Circularity as a Principle</h3>
            <p>Nothing wasted, everything reused</p>
          </li>
          <li a-t="r">
            <h3>Simplicity</h3>
            <p>
              Circular solutions must be as easy as single-use—only smarter 
            </p>
          </li>
          <li a-t="r">
            <h3>Environmental accountability</h3>
            <p>What gets measured, gets improved </p>
          </li>
          <li a-t="r">
            <h3>Partnership first</h3>
            <p>We don’t just supply; we collaborate </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
