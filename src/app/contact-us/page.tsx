"use client";

import { useRef } from "react";
import Animation from "./_animation";
import s from "./_s.module.css";
import sendEmail from "@/utils/sendEmail";

export default function () {
  const formR = useRef(null);
  const onsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      email: form.email.value,
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
      company: form.company.value,
    };
    console.log(formData);

    // await sendEmail(formData);
    form.reset()
  };
  return (
    <>
      <div className={s.p}>
        <main className={s.m}>
          <h1>
            TALK TO US
            <span>AGAIN, AND AGAIN.</span>
            <span className={s.l} />
          </h1>

          <form ref={formR} onSubmit={onsubmit}>
            <input type="text" name="name" placeholder="Name*" required />
            <input type="text" name="phone" placeholder="Phone Number" />
            <input type="email" name="email" placeholder="Email*" required />
            <input type="text" name="company" placeholder="Company" />
            {/* <input type="text" name="message" placeholder="Message" /> */}
            {/* <input type="textarea" name="message" placeholder="Message" /> */}
            <textarea name="message" placeholder="Message*" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </main>
      </div>
      <Animation />
    </>
  );
}
