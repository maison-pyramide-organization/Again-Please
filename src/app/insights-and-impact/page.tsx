"use client";
import s from "./_s.module.css";
import Animation from "./_animation";
import Image from "next/image";
import s0I from "@im/insights/s0.png";
import s1I from "@im/insights/s1.png";
import s21I from "@im/insights/s2-1.png";
import s22I from "@im/insights/s2-2.png";
import arrI from "@im/arr.png";
import s6I from "@im/insights/s6.png";
import s61I from "@im/insights/s61.png";
import s62I from "@im/insights/s62.png";
import s63I from "@im/insights/s63.png";
import s64I from "@im/insights/s64.png";
import IcArr from "@a/icons/c-arr.svg";
import Link from "next/link";
import { useRef, useState } from "react";
import Ipat from "@a/icons/ins-t-path.svg";
import Ipath from "@a/icons/path.svg";

export default function () {
  const listR = useRef(null) as any;
  const scrollVR = useRef(0);
  const [vis, setVis] = useState(false);

  const onBtnClick = (d) => {
    const list = listR.current;
    const liW = list.querySelector("li").offsetWidth;
    const itemsCount = list.querySelectorAll("li").length;

    const maxScroll = -(itemsCount - 1) * liW;

    let next = d === "prev" ? scrollVR.current + liW : scrollVR.current - liW;

    if (next > 0) next = 0;
    if (next < maxScroll) next = maxScroll;

    list.style.transform = `translateX(${next}px)`;
    scrollVR.current = next;
  };

  return (
    <>
      <div className={s.p}>
        <section className={s.s0}>
          <h1 a-t="r">INSPIRING THE SHIFT TO CIRCULAR SYSTEMS</h1>
          <div>
            <figure a-i="r">
              <Image src={s0I} alt="Insights and Impact" />
            </figure>
            <div className={s.r}>
              <h3 a-t="r">We believe knowledge drives change.</h3>
              <p>Explore insights, success stories, and practical resources.</p>
            </div>
          </div>
          <p a-t="r">
            From new sustainability regulations to major event partnerships, we
            share the latest updates shaping the future of reusable packaging
            and waste reduction.
          </p>
          {/* <Ipat g-s="tpath" /> */}
          <Ipath g-s="path" />
        </section>

        <section className={s.s1}>
          <span a-t="r">UPCOMING EVENTS</span>
          <h2 a-t="r">WORLD FUTURE ENERGY SUMMIT</h2>
          <div>
            <figure className="d-o" a-i="r">
              <Image src={s1I} alt="Insights and Impact" />
            </figure>
            <div className={s.r}>
              <h3 a-t="r">
                Again, Please will be exhibiting at the World Future Energy
                Summit (WFES) at ADNEC Abu Dhabi from 13–15 January 2025.
              </h3>
              <p a-t="r">
                At the Polygreen stand, we will showcase how our reusable
                packaging system helps events and F&B partners cut single-use
                waste and move toward a circular, scalable solutions.
                <br />
                <br />
                Polygreen will also take the stage with two sessions, including
                Just Go Zero: How Tilos Became the World’s First Zero Waste
                Island and the panel Designing Out Waste: Breaking the
                Throw-Away Mindset.
                <br />
                <br />
                If you’re attending WFES, come meet us at the Polygreen stand to
                experience the system firsthand, explore opportunities for
                collaboration, and see how reuse can work for your venue or
                organisation.
              </p>
            </div>
          </div>
        </section>
        <section g-s="s2" className={s.s2}>
          <h2 a-t="r">UNDERSTANDING REUSE & THE CIRCULAR ECONOMY</h2>

          <div className={s.i}>
            <span a-t="r">01.</span>
            <div>
              <h3 a-t="r">What is a Circular Economy?</h3>
              <figure a-i="r">
                <Image src={s21I} alt="Circlar Economy" />
              </figure>
            </div>
            <p a-t="r">
              A circular economy keeps materials in use for as long as possible,
              reducing waste at the source. Instead of throwing away packaging
              after one use, products circulate continuously through washing,
              sterilization and reuse.
              <br />
              <br />
              At Again, Please, every cup and container is designed to return,
              be washed, tracked, and placed back into service. It’s a smarter
              system that cuts waste, saves resources, and supports the UAE’s
              national transition to circularity.
            </p>
          </div>
          <div className={s.i}>
            <span a-t="r">02.</span>
            <div>
              <h3 a-t="r">Why Reuse Is Better for the Environment</h3>
              <figure a-i="r">
                <Image src={s22I} alt="Circlar Economy" />
              </figure>
            </div>
            <p a-t="r">
              Single-use packaging requires non-stop production, distribution
              and disposal — all of which carry a heavy environmental cost.
              Reusable systems break this cycle entirely.
              <br />
              <br />
              All Again, Please environmental metrics are based on{" "}
              <b>75 reuses</b>, in line with the verified Life Cycle Assessment
              (LCA) of our manufacturing partner for the 500ml PP cup. Below is
              the measurable impact of one reusable cup over <b>75 uses</b>.
            </p>
          </div>

          <div className={`${s.b} d-o`}>
            <h3>ENVIRONMENTAL IMPACT</h3>
            <div>
              <span a-n="up">75</span>
              <br />
              <span>uses</span>
            </div>
            <h3>OF ONE REUSABLE CUP</h3>
          </div>
          <p className="d-o" a-t="r">
            Estimates based on average life-cycle assessment data for
            polypropylene reusable cups and single-use plastic cups, assuming 75
            reuse cycles and industrial washing. Actual impacts may vary by
            location, energy mix, and operations.
          </p>
        </section>

        <section className={`${s.s3} d-o`}>
          <div className={s.i}>
            <div className={s.t}>
              <span g-s="line" />
              <h2 a-t="r">CO₂ EMISSIONS REDUCED</h2>
              <span g-s="line" />
            </div>
            <div className={s.m}>
              <div>
                <p>
                  ONE REUSABLE CUP
                  <br />
                  USED 75 TIMES SAVES
                </p>
              </div>
              <div>
                <Image src={arrI} alt="arrow" />
                <h3>
                  2.42 KG<span>OF CO₂</span>
                </h3>
                <Image src={arrI} alt="arrow" />
              </div>
              <div>
                <p>EQUALENT TO AVOIDING A</p>
                <h3>
                  14–15 KM<span>CAR TRIP</span>
                </h3>
              </div>
            </div>
            <div className={s.m}>
              <div>
                <p>
                  EMISSIONS FROM 75
                  <br />
                  SINGLE-USE CUPS
                </p>
                <h3>
                  3.0 KG<span>OF CO₂E</span>
                </h3>
              </div>
              <div>
                <Image className="v-h" src={arrI} alt="arrow" />
                <div>
                  <p>
                    EMISSIONS FROM ONE
                    <br />
                    REUSABLE CUP
                  </p>
                  <h3>
                    0.58 KG<span>OF CO₂E</span>
                  </h3>
                </div>
                <Image className="v-h" src={arrI} alt="arrow" />
              </div>
              <div>
                <p>
                  NET CO₂
                  <br />
                  SAVED
                </p>
                <h3>
                  2.42 KG<span>OF CO₂E</span>
                </h3>
              </div>
            </div>
          </div>
          <div className={s.i}>
            <div className={s.t}>
              <span g-s="line" />
              <h2 a-t="r">WATER SAVED</h2>
              <span g-s="line" />
            </div>
            <div className={s.m}>
              <div>
                <p>
                  ONE REUSABLE CUP
                  <br />
                  USED 75 TIMES SAVES
                </p>
              </div>
              <div>
                <Image src={arrI} alt="arrow" />
                <div>
                  <p>AROUND</p>
                  <h3>
                    4.5 LITRES<span>OF WATER SAVED</span>
                  </h3>
                </div>
                <Image src={arrI} alt="arrow" />
              </div>
              <div>
                <p>EQUIVALENT TO AVOIDING A</p>
                <h3>
                  14–15 KM<span>CAR TRIP</span>
                </h3>
              </div>
            </div>
          </div>
          <div className={s.i}>
            <div className={s.t}>
              <span g-s="line" />
              <h2 a-t="r">PLASTIC WASTE PREVENTED</h2>
              <span g-s="line" />
            </div>
            <div className={s.m}>
              <div>
                <p>
                  ONE REUSABLE CUP
                  <br />
                  USED 75 TIMES SAVES
                </p>
              </div>
              <div>
                <Image src={arrI} alt="arrow" />
                <h3>
                  579 GRAMS<span>OF PLASTIC WASTE</span>
                </h3>
                <Image src={arrI} alt="arrow" />
              </div>
              <div>
                <p>OVER</p>
                <h3>
                  0.5 KG<span>KEPT OUT OF LANDFILLS AND OCEANS.</span>
                </h3>
              </div>
            </div>
            <div className={s.m}>
              <div>
                <p>
                  PLASTIC FROM 75
                  <br />
                  SINGLE-USE CUPS
                </p>
                <h3>615 G</h3>
              </div>
              <div>
                <Image className="v-h" src={arrI} alt="arrow" />
                <div>
                  <p>
                    PLASTIC IN ONE
                    <br />
                    REUSABLE CUP
                  </p>
                  <h3>35.76 G</h3>
                </div>
                <Image className="v-h" src={arrI} alt="arrow" />
              </div>
              <div>
                <p>
                  NET PLASTIC
                  <br />
                  AVOIDED
                </p>
                <h3>579 G</h3>
              </div>
            </div>
          </div>
          <div className={s.i}>
            <div className={s.t}>
              <span g-s="l" />
              <h2 a-t="r">ENERGY SAVED</h2>
              <span g-s="l" />
            </div>
            <div className={s.m}>
              <div>
                <p>
                  ONE REUSABLE CUP
                  <br />
                  USED 75 TIMES PREVENTS
                </p>
              </div>
              <div>
                <Image src={arrI} alt="arrow" />
                <h3>0.3 KWH</h3>
                <Image src={arrI} alt="arrow" />
              </div>
              <div>
                <p>
                  ENOUGH TO CHARGE
                  <br />A SMARTPHONE
                </p>
                <h3>30 TIMES</h3>
              </div>
            </div>
          </div>
        </section>

        <section g-s="s4" className={s.s4}>
          <h2>POLICIES CHANGES AND UPDATES</h2>
          <p>
            The UAE is rapidly transitioning to a circular, low-waste future by
            phasing out single-use plastics across the country. Abu Dhabi banned
            single-use plastic bags in 2022, and Dubai followed with a full ban
            in 2024.
            <br />
            <br />
            Under Federal Ministerial Resolution No. 380 of 2022, the UAE will
            implement a nationwide ban on the import, production and trade of
            most single-use plastic items - including cups, lids, cutlery,
            plates and food containers - starting 1 January 2026.
            {vis && (
              <span>
                Dubai is also advancing circularity through the Circle Dubai
                Initiative, which aligns with the Dubai Integrated Waste
                Management Strategy 2041 and targets 100% landfill diversion and
                56% recycling across the emirate. These policies collectively
                signal one direction: single-use is being phased out, and reuse
                systems will become the standard for events, venues, hospitality
                and businesses across the UAE.
                <br />
                <br />
                <b>Legal Disclaimer</b> :This section provides a high-level
                summary of current UAE policies on single-use plastics. It is
                not legal advice. For full regulatory requirements, businesses
                should review official government publications or consult
                qualified legal counsel.
              </span>
            )}
          </p>
          <button
            onClick={() => {
              setVis(!vis);
            }}
          >
            {vis ? "SHOW LESS" : "READ MORE"}
          </button>
        </section>

        <section className={s.s5}>
          <p>
            <span>“</span>At Again, Please, we’re building circular systems by
            replacing single-use packaging with reusable packaging.
            <br />
            <br />
            Our end-to-end reusable solutions help eliminate waste, reduce
            carbon emissions, and meet measurable circular economy goals, all
            while simplifying compliance and enhancing the guest experience.
            <span className="d-o">"</span>
          </p>
          <span>Athanasios Polychronopoulos</span>
        </section>

        <section g-s="s6" className={s.s6}>
          <figure a-i="r">
            <Image src={s6I} alt="" />
          </figure>
          <h3 a-t="r">
            USE CASES & SUCCESS STORIES
            <span>CIRCULAR SYSTEMS IN ACTION</span>
          </h3>
          <p a-t="r">
            See how venues, events, and hospitality brands are implementing
            circular systems that reduce waste and enhance operational
            performance. Our use cases highlight real results achieved through
            partnership, innovation, and sustainable design.
          </p>
          <div className={s.b}>
            <h2 a-t="r">Imagine the Impact</h2>
            <p a-t="r">
              A concert where 40,000 people use Again, Please reusable cups
              instead of single-use cups. Using the verified 75 uses cycle
              metrics, we can expect the following results:
            </p>
            <p className="m-o" a-t="r">
              Estimates based on average life-cycle assessment data for
              polypropylene reusable cups and single-use plastic cups, assuming
              75 reuse cycles and industrial washing. Actual impacts may vary by
              location, energy mix, and operations.
            </p>
            <div>
              <ul ref={listR}>
                <li>
                  <figure a-i="r">
                    <Image src={s61I} alt="" />
                  </figure>
                </li>
                <li>
                  <figure a-i="r">
                    <Image src={s62I} alt="" />
                  </figure>
                </li>
                <li>
                  <figure a-i="r">
                    <Image src={s63I} alt="" />
                  </figure>
                </li>
                <li>
                  <figure a-i="r">
                    <Image src={s64I} alt="" />
                  </figure>
                </li>
              </ul>
            </div>
            <nav className="m-o">
              <IcArr onClick={() => onBtnClick("prev")} />
              <IcArr onClick={() => onBtnClick("next")} />
            </nav>
          </div>
        </section>
        <section className={s.s7}>
          <h2 a-t="r" className="d-o">
            READY TO WRITE
            <br />
            YOUR OWN CIRCULAR SUCCESS STORY?
          </h2>
          <h2 className="m-o">
            READY TO <br /> GO CIRCULAR?
          </h2>
          <p a-t="r">
            Let’s collaborate and design a reuse program that fits your venue,
            brand, and sustainability goals.
          </p>
          <Link href="/contact-us">REQUEST A QUOTE</Link>
        </section>
      </div>
      <Animation />
    </>
  );
}
