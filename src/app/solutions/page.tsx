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
import ProductsMarquee from "@/components/products-marq";

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
            <span a-t="r">DESIGNED FOR EVERY OPERATION</span>
          </h1>
          <div>
            <p a-t="r">
              Again, Please delivers reuse as a fully managed, end-to-end
              system. Whether you operate an events venue, cinema, theme park,
              mall, QSR, hotel group, or large-scale activation, we help you
              replace single-use packaging with a reuse model that works
              operationally, engages consumers, and delivers measurable impact.
            </p>
            <div>
              <p a-t="r">
                Our solutions are financially viable, tailored to your
                operation, and built to meet strict safety and operational
                standards in high-volume environments.
              </p>
              <p a-t="r">
                Because we manage the entire system, we can guarantee
                performance, compliance, and impact at scale.
              </p>
            </div>
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
            <span a-t="r">01</span>
            <h2>
              Consumer Engagement
              <span>Simple to use. Easy to return. Designed to engage.</span>
            </h2>
            <Image
              a-i="r"
              className="m-o"
              src={s11mI}
              alt="Consumer Engagement"
            />
            <Image
              a-i="r"
              className="d-o"
              src={s11I}
              alt="Consumer Engagement"
            />
            <div className={s.co}>
              <p a-t="r">
                We design consumer journeys that make reuse intuitive and
                frictionless, even in fast-paced, high-volume settings.
              </p>
              <ul>
                <li a-t="r">
                  Activation of collection-return assets through impactful
                  signage, and on-ground guidance designed to support
                  high-volume-return environments
                </li>
                <li a-t="r">
                  QR-enabled reusable cups and containers Mobile-friendly
                  engagement through dedicated app or landing page
                </li>
                <li a-t="r">
                  Custom reward mechanics to drive participation and returns
                  through raffles, prizes, or brand-led incentives
                </li>
                <li a-t="r">
                  Clear visibility of sustainability impact such as waste
                  avoided and CO₂ savings
                </li>
              </ul>
              <p a-t="r">
                Reuse becomes a positive brand experience, not a behavioral
                hurdle.
              </p>
            </div>
          </div>
          <div className={s.i}>
            <span a-t="r">02</span>
            <h2 a-t="r" className="d-o">
              B2B Platform & Reporting
              <span>Operational control with measurable ESG impact</span>
            </h2>
            <h2 a-t="r" className="m-o">
              B2B Platform &<br />
              Reporting
              <span>Operational control with measurable ESG impact</span>
            </h2>
            <Image a-i="r" src={s12I} alt="B2B Platform & Reporting" />
            <div className={s.co}>
              <p a-t="r">
                Our dedicated B2B platform gives you full visibility and control
                over your reuse system.
              </p>
              <ul>
                <li a-t="r">
                  Centralized stock ordering and inventory management
                </li>
                <li a-t="r">Performance tracking across events or locations</li>
                <li a-t="r">
                  ESG-ready reporting on waste reduction and CO₂ savings – on
                  demand
                </li>
                <li a-t="r">
                  Data suitable for compliance, reporting, and stakeholder
                  communication
                </li>
              </ul>
              <p a-t="r">
                Reuse becomes measurable, auditable, and business-ready.
              </p>
            </div>
          </div>
          <div className={s.i}>
            <span a-t="r">03</span>
            <h2>
              Tailored Reusable Packaging
              <span>Built around your service, not the other way around</span>
            </h2>
            <div className={s.co}>
              <p a-t="r">
                We provide and we co-develop durable, high-performance reusable
                packaging designed for repeated use in demanding environments.
              </p>
              <ul>
                <li a-t="r">Cold and hot beverage cups in multiple sizes</li>
                <li a-t="r">
                  Food containers for meals, snacks, and concessions
                </li>
                <li a-t="r">Custom branding and co-branding options</li>
              </ul>
              <p a-t="r">
                Packaging that performs operationally while reinforcing your
                brand.
              </p>
            </div>
          </div>
          <ProductsMarquee />
          <div className={s.i}>
            <span a-t="r">04</span>
            <h2 a-t="r">
              Logistics, Washing & Circular Operations
              <span>Reliability and hygiene, managed end to end</span>
            </h2>
            <Image
              a-i="r"
              src={s13I}
              alt="Logistics, Washing & Circular Operations"
            />
            <div className={s.co}>
              <p a-t="r">
                We handle the full operational backbone of reuse so you don’t
                have to.
              </p>
              <ul>
                <li a-t="r">
                  Scheduled delivery and collection aligned to your operation
                </li>
                <li a-t="r">
                  Industrial washing and sanitization at our dedicated facility
                  in KEZAD, Abu Dhabi
                </li>
                <li a-t="r">
                  Strict hygiene, food safety, and quality control standards
                </li>
                <li a-t="r">
                  Secure storage and redistribution for ongoing or repeat use
                </li>
              </ul>
              <p a-t="r">
                Reuse at scale, without compromising on safety or consistency.
              </p>
            </div>
          </div>
        </section>

        <section className={s.s2}>
          <h2 a-t="r">THE CIRCULAR JOURNEY</h2>
          <figure a-i="r">
            <Image className="m-o" src={s2mI} alt="The Circular Journey" />
            <Image className="d-o" src={s2I} alt="The Circular Journey" />
          </figure>
        </section>

        <section className={s.s3}>
          <h2 a-t="r">
            LET’S BUILD
            <br />
            YOUR CUSTOM CIRCULAR SOLUTION
          </h2>
          <Link href="/contact-us">TALK TO OUR TEAM</Link>
        </section>
      </div>
      <Animation />
    </>
  );
}
