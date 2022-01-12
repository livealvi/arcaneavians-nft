import React from "react";
import "./Section.css";

export const Section = (props) => {
  const { header, info, article } = props.section;
  return (
    <div>
      <h1>{header}</h1>
      <h2>{info}</h2>
      <p>{article}</p>
    </div>
  );
};
