import Animation from "./_animation";
import s from "./_s.module.css";

export default function () {
  return (
    <>
      <div className={s.p}>
        <main className={s.m}>
          <h1>
            TALK TO US
            <span>AGAIN, AND AGAIN.</span>
            <span className={s.l} />
          </h1>

          <form>
            <input type="text" name="name" placeholder="Name*" />
            <input type="number" name="number" placeholder="Phone Number" />
            <input type="email" name="email" placeholder="Email*" />
            <input type="text" name="company" placeholder="Company" />
            {/* <input type="text" name="message" placeholder="Message" /> */}
            {/* <input type="textarea" name="message" placeholder="Message" /> */}
            <textarea name="message" placeholder="Message*"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </main>
      </div>
      <Animation />
    </>
  );
}
