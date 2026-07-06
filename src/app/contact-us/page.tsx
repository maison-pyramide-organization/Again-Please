"use client";
import { useEffect, useState } from "react";
import Animation from "./_animation";
import s from "./_s.module.css";
import { getFaqs } from "@/services/api";
import Accordion from "@/components/accordion";
import Markdown from "react-markdown";
import tabs from "@/data/faqs";
import Talk from "./components/Talk";
import Ichev from "@a/icons/chev.svg";
import { useRef } from "react";

export default function Contact() {
  const [active, setActive] = useState<string>("about");
  const [faqs, setFaqs] = useState<any[]>([]);
  const [activeFaqs, setActiveFaqs] = useState<any[]>([]);

  const getActiveFaqs = (tabId: string, faqList: any[]) => {
    return faqList
      .filter((faq) => faq.type === tabId)
      .sort((a, b) => a.index - b.index);
    // return faqList.filter((faq) => faq.type === tabId);
  };

  useEffect(() => {
    getFaqs().then((fetchedFaqs) => {
      setFaqs(fetchedFaqs);
      setActiveFaqs(getActiveFaqs("about", fetchedFaqs)); // ✅ use resolved value, not stale state
    });
  }, []);

  const handleTabC = (tabId: string) => {
    // ✅ receive id, not full object
    setActive(tabId);
    setActiveFaqs(getActiveFaqs(tabId, faqs)); // ✅ tabId is now defined
  };

  const activeTab = tabs.find((tab) => tab.id === active); // ✅ look up tab for the heading

  // ...inside your component
  const tabsListRef = useRef(null) as any;

  const scrollTabs = (direction) => {
    const container = tabsListRef.current;
    if (!container) return;

    // scroll by ~80% of the visible width each click
    const scrollAmount = container.clientWidth * 0.5;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={s.p}>
        <main className={s.m}>
          <section className={s["s-faq"]}>
            <h1>
              FREQUENTLY
              <span>ASKED QUESTIONS</span>
              <span className={s.l} />
            </h1>
            <nav className={s["tabs-nav"]}>
              <Ichev onClick={() => scrollTabs("prev")} />
              <Ichev onClick={() => scrollTabs("next")} />
            </nav>
            <ul ref={tabsListRef} className={` ${s["tabs-list"]} h-s`}>
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={
                    active === tab.id ? `${s.tab} ${s.active}` : `${s.tab}`
                  }
                  onClick={() => handleTabC(tab.id)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
            <h3>{activeTab?.name}</h3> {/* ✅ use derived activeTab */}
            <div className={s["faq-list"]}>
              {activeFaqs?.map((faq, i) => (
                <div className={s.faq} key={`${active}-${i}`}>
                  <Accordion title={faq.question}>
                    <div className={s.markdown}>
                      <Markdown>{faq.answer}</Markdown>
                    </div>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>

          <h3>
            GOT MORE
            <br />
            QUESTIONS?
          </h3>

          <Talk />
        </main>
      </div>
      <Animation />
    </>
  );
}
