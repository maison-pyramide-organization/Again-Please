"use client";
import RichTextDetails from "@/components/richtext";
import s from "../_s.module.css";

interface Iprops {
  events: any[];
}

export default function Events(props: Iprops) {
  const { events } = props;

  return (
    <section className={s.events}>
      <h2>EVENTS</h2>
      <ul>
        {events.map((event, i) => (
          <li className={s.event} key={i}>
            <h3>{event.title}</h3>
            <div>
              <figure>
                <img src={event.image?.fields.file.url} alt="" />
              </figure>
              <aside>
                <RichTextDetails content={event.description} />
              </aside>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
