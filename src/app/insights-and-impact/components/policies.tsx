"use client";
import { useState } from "react";
import s from "../_s.module.css";

export default function Policies() {
  const [vis, setVis] = useState(false);

  return (
      <section g-s="s4" className={s.s4}>
        <h2>POLICIES CHANGES AND UPDATES</h2>
        <p>
          The UAE is rapidly transitioning to a circular, low-waste future by
          phasing out single-use plastics across the country. Abu Dhabi banned
          single-use plastic bags in 2022, and Dubai followed with a full ban in
          2024.
          <br />
          <br />
          Under Federal Ministerial Resolution No. 380 of 2022, the UAE will
          implement a nationwide ban on the import, production and trade of most
          single-use plastic items - including cups, lids, cutlery, plates and
          food containers - starting 1 January 2026.
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
              summary of current UAE policies on single-use plastics. It is not
              legal advice. For full regulatory requirements, businesses should
              review official government publications or consult qualified legal
              counsel.
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
  );
}
