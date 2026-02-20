"use client";
import { useState } from "react";
import s from "../_s.module.css";
import RichTextDetails from "@/components/richtext";
import ArticlePopup from "./article-popup";

interface Iprops {
  press: any[];
}
export default function Press(props: Iprops) {
  const { press } = props;
  const pArticle = press.find((item) => item.withPopup === true);
  const restOfPress = press.filter((item) => item.id !== pArticle?.id);
  const [isOp, setIsOp] = useState(false);

  const openPopup = () => {
    document.body.classList.add("d-s");
    setIsOp(true);
  };
  const closePopup = () => {
    document.body.classList.remove("d-s");
    setIsOp(false);
  };

  return (
    <section g-s="s-p" className={s.press}>
      <h2>IN THE PRESS</h2>
      {/* MAIN ARTICLE */}
      <div className={s.pArticle}>
        <h2>{pArticle.title}</h2>
        <div>
          <figure>
            <img src={pArticle.image?.fields.file.url} alt="" />
          </figure>
          <aside>
            <RichTextDetails content={pArticle.caption} />
            <button onClick={openPopup}>READ MORE</button>
          </aside>
        </div>
      </div>
      {/* MAIN ARTICLE POPUP */}
      {isOp && (
        <ArticlePopup
          article={pArticle}
          close={closePopup}
          title="in the press"
        />
      )}
      {/* PRESS ARTICLES */}
      <ul>
        {restOfPress.map((article, i) => (
          <li key={i} className={s.article}>
            <figure>
              <img src={article.image?.fields.file.url} alt="" />
            </figure>
            <span>{article.date}</span>
            <h3>{article.title}</h3>
            <div>
              <RichTextDetails content={article.description} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
