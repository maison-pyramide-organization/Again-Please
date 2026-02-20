import s from "../_s.module.css";
import { getForce } from "@/services/api";

export default async function Force() {
  const f = (await getForce()) as any;
  const ceo = f.find((item) => item.index === 0);
  const force = f
    .filter((item) => item.index !== 0)
    .sort((a, b) => a.index - b.index);

  return (
    <section id="s-f" className={s["s-f"]}>
      <figure>
        <video
          className={s.v}
          autoPlay
          loop
          muted
          playsInline
          src="/videos/ap-about.mp4"
        />
      </figure>
      <h2 a-t="r">
        THE FORCE BEHIND
        <br />
        THE CHANGE
      </h2>
      <div className={s.ceo}>
        <figure>
          <img src={`https:${ceo.image?.fields.file.url}`} alt={ceo.name} />
        </figure>
        <div>
          <h3 a-t="r">Athanasios Polychronopoulos</h3>
          <span a-t="r">Chairman & CEO of Polygreen Group of Companies </span>
          {ceo.description.split("\n\n").map((p, i) => (
            <p key={i} a-t="r">
              {p}
            </p>
          ))}
          <a
            href="https://www.linkedin.com/in/athanasios-polychronopoulos-44824933/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      <ul className="h-s">
        {force.map((f, i) => (
          <li key={i}>
            <figure>
              <img
                a-i="r"
                src={`https:${f.image?.fields.file.url}`}
                alt={ceo.name}
              />
            </figure>

            <div className={s.b}>
              <h4 a-t="r">{f.name}</h4>
              <p a-t="r">{f.title}</p>
              <a target="_blank" href={f.url}>
                LINKEDIN
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
