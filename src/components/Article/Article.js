import React from "react";
import "./Article.css";

const Article = (props) => {
  const { head, paragraph } = props.articles;
  console.log(props.articles);
  console.log();
  return (
    <div className="article">
      <div className="article__content">
        <u className="article__content__head">{head}</u>
        <span>-</span>
        <div
          className="article__content__paragraph"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>
    </div>
  );
};

export default Article;
