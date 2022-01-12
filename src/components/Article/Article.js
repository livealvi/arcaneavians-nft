import React from "react";
import "./Article.css";

const Article = (props) => {
  const { head, paragraph } = props.articles;
  console.log(props.articles);
  console.log();
  return (
    <div className="article">
      <div className="article__content">
        <p className="article__content__head">{head}</p>
        <div dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  );
};

export default Article;
