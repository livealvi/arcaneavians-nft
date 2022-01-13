import React from "react";
import Article from "../Article/Article";
import "./Roadmap.css";
import coin from "../../asset/img/tokenpng.png";

const Roadmap = (props) => {
  const { title, article } = props.phases;
  return (
    <div className="roadmap">
      <div className="roadmap__box">
        <h2 className="roadmap__title">{title}</h2>
        <div className="roadmap__coinImg">
          <img src={coin} alt="" />
        </div>
        {article.map((text, index) => (
          <Article key={index} articles={text}></Article>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
