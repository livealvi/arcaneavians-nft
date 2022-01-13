import React from "react";
import coin_gif from "../../asset/img/tokengif.gif";
import "./About.css";

const About = (props) => {
  const { header, info, article } = props.about;
  return (
    <div className="about">
      <h1 className="about__heading">{header}</h1>
      <div className="about__img">
        <img src={coin_gif} alt="" />
      </div>
      <h2 className="about__info">{info}</h2>
      <p className="about__article">{article}</p>
    </div>
  );
};

export default About;
