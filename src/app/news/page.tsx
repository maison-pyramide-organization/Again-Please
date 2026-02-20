import s from "./_s.module.css";
import Animation from "./_animation";
import Slider from "./components/slider";
import { getArticles, getBlogs } from "@/services/api";
import Blogs from "./components/blogs";
import Events from "./components/events";
import Press from "./components/press";
import Header from "./components/header";

export default async function () {
  const articles = await getArticles();
  const blogs = await getBlogs();

  return (
    <div className={s.p}>
      <Slider />
      <Header />
      <Events events={articles.events} />
      <Press press={articles.press} />
      <Blogs blogs={blogs} />
      <Animation />
    </div>
  );
}
