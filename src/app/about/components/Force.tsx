import s from "../_s.module.css";
import force from "@/data/force";
import Image from "next/image";
import ceoI from "@a/images/about/ceo.png";

export default function Force() {
  return (
    <section className={s["s-f"]}>
      <h2>
        THE FORCE BEHIND
        <br />
        THE CHANGE
      </h2>
      <div className={s.ceo}>
        <figure>
          <Image src={ceoI} alt="ATHANASIOS POLYCHRONOPOULOS" />
        </figure>
        <div>
          <h3>ATHANASIOS POLYCHRONOPOULOS</h3>
          <span>Chairman & CEO of Polygreen Group of Companies </span>
          <p>
            Mr. Athanasios Polychronopoulos is the Founder and President of
            Polygreen S.A., a global leader in circular economy solutions,
            providing innovative, reliable, and cost-effective waste and marine
            pollution management services.
          </p>
          <p>
            A graduate of the University of Piraeus with executive training from
            Stanford and Harvard, he brings over 20 years of experience leading
            some of the most demanding and technically complex environmental
            projects worldwide.
          </p>
          <p>
            In 2021, under his vision and leadership, Polygreen launched the
            flagship initiative Just Go Zero Tilos, a pioneering circular
            economy project in partnership with the Municipality of Tilos. This
            groundbreaking effort transformed Tilos into the world’s first
            island to divert 100% of its waste from landfill, setting a global
            benchmark for zero-waste communities and demonstrating how
            private-sector innovation can successfully collaborate with local
            governance to achieve lasting environmental impact.
          </p>
          <a href="https://www.linkedin.com/in/kyriakoskofinas/">LINKEDIN</a>
        </div>
      </div>

      <ul className="h-s">
        {force.map((f, i) => (
          <li key={i}>
            <figure>
              <Image src={f.image} alt={f.name} />
            </figure>
            <h4>{f.name}</h4>
            <p>{f.role}</p>
            <a target="_blank" href={f.link}>
              LINKEDIN
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
