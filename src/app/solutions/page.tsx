import s from "./_s.module.css";
import Animation from "./_animation";
import Image from "next/image";
import Link from "next/link";
import s11I from "@im/solutions/s1-1.png";
import s11mI from "@im/solutions/s1-1m.png";
import s12I from "@im/solutions/s1-2.png";
import s13I from "@im/solutions/s1-3.png";
import s2I from "@im/solutions/s2.png";
import s2mI from "@im/solutions/s2m.png";

export default function () {
  return (
    <>
      <div className={s.p}>
        <section className={s.s0}>
          <figure>
            <video
              className={s.v}
              autoPlay
              loop
              muted
              playsInline
              //   poster={`/vph.png`}
            >
              <source src="/videos/ap-animation.mp4" type="video/mp4" />
            </video>
          </figure>
          <h1>
            AN END-TO-END REUSE SYSTEM
            <span>DESIGNED FOR EVERY OPERATION</span>
          </h1>
          <div>
            <p>
              Again, Please delivers reuse as a fully managed, end-to-end
              system. Whether you operate an events venue, cinema, theme park,
              mall, QSR, hotel group, or large-scale activation, we help you
              replace single-use packaging with a reuse model that works
              operationally, engages consumers, and delivers measurable impact.
            </p>
            <p>
              Our solutions are financially viable, tailored to your operation,
              and built to meet strict safety and operational standards in
              high-volume environments.
              <br />
              <br />
              Because we manage the entire system, we can guarantee performance,
              compliance, and impact at scale.
            </p>
          </div>
        </section>

        <section className={s.s1}>
          <h2 className="d-o">
            OUR
            <span>COMPLETE SOLUTIONS</span>
            <span className={s.l} />
          </h2>
          <h2 className="m-o">
            OUR
            <span>COMPLETE</span>
            <span>SOLUTIONS</span>
            <span className={s.l} />
          </h2>
          <div className={s.i}>
            <span>01</span>
            <h2>
              Consumer Engagement
              <span>Simple to use. Easy to return. Designed to engage.</span>
            </h2>
            <Image className="m-o" src={s11mI} alt="Consumer Engagement" />
            <Image className="d-o" src={s11I} alt="Consumer Engagement" />
            <div>
              <p>
                We design consumer journeys that make reuse intuitive and
                frictionless, even in fast-paced, high-volume settings.
              </p>
              <ul>
                <li>
                  Activation of collection-return assets through impactful
                  signage, and on-ground guidance designed to support
                  high-volume-return environments
                </li>
                <li>
                  QR-enabled reusable cups and containers Mobile-friendly
                  engagement through dedicated app or landing page
                </li>
                <li>
                  Custom reward mechanics to drive participation and returns
                  through raffles, prizes, or brand-led incentives
                </li>
                <li>
                  Clear visibility of sustainability impact such as waste
                  avoided and CO₂ savings
                </li>
              </ul>
              <p>
                Reuse becomes a positive brand experience, not a behavioral
                hurdle.
              </p>
            </div>
          </div>
          <div className={s.i}>
            <span>02</span>
            <h2>
              B2B Platform &<br />
              Reporting
              <span>Operational control with measurable ESG impact</span>
            </h2>
            <Image src={s12I} alt="B2B Platform & Reporting" />
            <div>
              <p>
                Our dedicated B2B platform gives you full visibility and control
                over your reuse system.
              </p>
              <ul>
                <li>Centralized stock ordering and inventory management</li>
                <li>Performance tracking across events or locations</li>
                <li>
                  ESG-ready reporting on waste reduction and CO₂ savings – on
                  demand
                </li>
                <li>
                  Data suitable for compliance, reporting, and stakeholder
                  communication
                </li>
              </ul>
              <p>Reuse becomes measurable, auditable, and business-ready.</p>
            </div>
          </div>
          <div className={s.i}>
            <span>03</span>
            <h2>
              Tailored Reusable Packaging
              <span>Built around your service, not the other way around</span>
            </h2>
            <div>
              <p>
                We provide and we co-develop durable, high-performance reusable
                packaging designed for repeated use in demanding environments.
              </p>
              <ul>
                <li>Cold and hot beverage cups in multiple sizes</li>
                <li>Food containers for meals, snacks, and concessions</li>
                <li>Custom branding and co-branding options</li>
              </ul>
              <p>
                Packaging that performs operationally while reinforcing your
                brand.
              </p>
            </div>
          </div>
          <div className={s.i}>
            <span>04</span>
            <h2>
              Logistics, Washing & Circular Operations
              <span>Reliability and hygiene, managed end to end</span>
            </h2>
            <Image src={s13I} alt="Logistics, Washing & Circular Operations" />
            <div>
              <p>
                We handle the full operational backbone of reuse so you don’t
                have to.
              </p>
              <ul>
                <li>
                  Scheduled delivery and collection aligned to your operation
                </li>
                <li>
                  Industrial washing and sanitization at our dedicated facility
                  in KEZAD, Abu Dhabi
                </li>
                <li>
                  Strict hygiene, food safety, and quality control standards
                </li>
                <li>
                  Secure storage and redistribution for ongoing or repeat use
                </li>
              </ul>
              <p>
                Reuse at scale, without compromising on safety or consistency.
              </p>
            </div>
          </div>
        </section>

        <section className={s.s2}>
          <h2>THE CIRCULAR JOURNEY</h2>
          <figure>
            <Image className="m-o" src={s2mI} alt="The Circular Journey" />
            <Image className="d-o" src={s2I} alt="The Circular Journey" />
          </figure>
        </section>
        <section className={s.s3}>
          <h2>
            LET’S BUILD
            <br />
            YOUR CUSTOM CIRCULAR SOLUTION
          </h2>
          <Link href="/contact">TALK TO OUR TEAM</Link>
        </section>
      </div>
      <Animation />
    </>
  );
}
