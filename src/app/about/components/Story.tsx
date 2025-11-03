import s from "../_s.module.css";

export default function Story() {
  return (
    <section className={s["s-s"]}>
      <div className={s.h}>
        <h1 a-t="r">OUR STORY</h1>
        <p a-t="r">
          Again, Please, a Polygreen company, helps brands, venues, and HoReCa
          operators move beyond single-use.
        </p>
      </div>
      <ul>
        <li>
          <span a-t="r">01</span>
          <h3 a-t="r">End-to-End Reuse Solutions</h3>
          <p a-t="r">
            We design and run end-to-end reuse programs, from design and
            co-branding through collection, washing, and redistribution.{" "}
          </p>
        </li>
        <li>
          <span a-t="r">02</span>
          <h3 a-t="r">Connected, Scalable, Circular</h3>
          <p a-t="r">
            The result is a smooth, sanitary service that guests prefer. For us,
            reuse is made possible by connecting products, logistics, and people
            in one smart loop. Our systems scale easily, are measured end to
            end, and keep resources in play.
          </p>
        </li>
        <li>
          <span a-t="r">03</span>
          <h3 a-t="r">About Polygreen</h3>
          <p a-t="r">
            Polygreen, founded in 2018 in Cyprus, is a global network active
            across Europe, the Middle East, and Africa. Through integrated waste
            management, recycling, upcycling, and education, it advances the
            circular economy and moves the world beyond the “take-make-dispose”
            model.
          </p>
        </li>
      </ul>
    </section>
  );
}
