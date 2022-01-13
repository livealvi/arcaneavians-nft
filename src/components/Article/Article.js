import React from "react";
import "./Article.css";
import NFT from "../NFT/NFT";

const Article = (props) => {
  const { head, paragraph, img_grid } = props.articles;
  return (
    <div className="article">
      <div className="article__content">
        <u className="article__content__head">{head}</u>
        <span>-</span>
        <div
          className="article__content__paragraph"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
        <div className="article__content__grid">{img_grid && <NFT />}</div>
      </div>
    </div>
  );
};

export default Article;
