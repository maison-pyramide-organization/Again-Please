import s from "../_s.module.css";
import Iclose from "@a/icons/close.svg";
import Ichev from "@a/icons/chev.svg";
import RichTextDetails from "@/components/richtext";

interface Iprops {
  title: string;
  article: any;
  close: () => void;
}

export default function ArticlePopup(props: Iprops) {
  const { title, article, close } = props;

  return (
    <div className={`${s.popup} ${s.active} h-s`} data-lenis-prevent>
      <div className={s.popup_}>
        <div className={s.popup_h}>
          <h2>{title}</h2>
          <Iclose onClick={close} />
        </div>
        <div className={s.title}>
          <h3>{article.title}</h3>
          {/* <nav>
            <Ichev />
            <Ichev />
          </nav> */}
        </div>
        <figure>
          <img src={article.image?.fields.file.url} alt="" />
        </figure>
        <div className={s.popup_content}>
          <div className={s.l}>
            <RichTextDetails content={article.leftText} />
          </div>
          <div className={s.r}>
            <RichTextDetails content={article.rightText} />
          </div>
        </div>
      </div>
    </div>
  );
}
