import s from "./_s.module.css";
import Animation from "./_animation";
import Image from "next/image";
import s0I from "@im/insights/s0.png";
import s1I from "@im/insights/s1.png";
import s21I from "@im/insights/s2-1.png";
import s22I from "@im/insights/s2-2.png";
import arrI from "@im/arr.png";
import s6I from "@im/insights/s6.png";
import Link from "next/link";
import Ipath from "@a/icons/path.svg";
import Products from "./components/products";
import { getEvent } from "@/services/api/force";
import RichText from "@/components/richtext";

export default async function () {
  const events = (await getEvent()) as any;
  const event = events[0];

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
          <span a-t="r">OUR EVENTS</span>
          <h2 a-t="r">WORLD FUTURE ENERGY SUMMIT</h2>
          <div>
            <figure className="d-o" a-i="r">
              <Image src={s1I} alt="Insights and Impact" />
            </figure>
            <div className={s.r}>
              {event.details && <RichText content={event?.details} />}
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

            <Products />
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
