"use client";

import { useState } from "react";
import s from "../_s.module.css";
import ArticlePopup from "./article-popup";

interface Iprops {
  blogs: any[];
}
export default function Blogs(props: Iprops) {
  const { blogs } = props;
  const [blogPopup, setBlogPopup] = useState(null);
  const handleClick = (i: any) => {
    setBlogPopup(blogs[i]);
  };
  const closePopup = () => {
    setBlogPopup(null);
  };

  return (
    <section g-s="s-b" className={s.blogs}>
      <h2>BLOG</h2>
      <ul>
        {blogs.map((blog, i) => (
          <li className={s.blog} key={i}>
            <span>{blog.date}</span>
            <h3>{blog.title}</h3>
            <figure>
              <img src={blog.image?.fields.file.url} alt="" />
            </figure>
            <p>{blog.caption}</p>
            <button onClick={() => handleClick(i)}>READ MORE</button>
          </li>
        ))}
      </ul>
      {blogPopup && (
        <ArticlePopup title="blog" article={blogs[0]} close={closePopup} />
      )}
    </section>
  );
}
