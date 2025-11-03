import s from "../_s.module.css";

export default function Story() {
  return (
    <section className={s["s-s"]}>
      <h1 a-t="r">OUR STORY</h1>
      <p a-t="r">
        With a values-driven approach, Polygreen champions transparency,
        quality, and ethical collaboration with communities and partners. 
      </p>
      <div className={s.t}>
        <p a-t="r">
          We design and run end-to-end reuse programs, from design and
          co-branding through collection, washing, and redistribution.
        </p>
        <p a-t="r">
          The result is a smooth, sanitary service that guests prefer. For us,
          reuse is made possible by connecting products, logistics, and people
          in one smart loop. Our systems scale easily, are measured end to end,
          and keep resources in play.
        </p>
      </div>
      <div className={s.b}>
        <span a-t="r">About Polygreen</span>
        <div>
          <p a-t="r">
            Polygreen, founded in 2018 in Cyprus, is a global network active
            across Europe, the Middle East, and Africa. Through integrated waste
            management, recycling, upcycling, and education, it advances the
            circular economy and moves the world beyond the “take-make-dispose”
            model.
          </p>
        </div>
      </div>
    </section>
  );
}
