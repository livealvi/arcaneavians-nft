import React, { useState } from "react";
import "./Content.css";
import ContentData from "../../Data/ContentData.json";
import { Section } from "../Section/Section";

const Content = () => {
  const [section, setSection] = useState(ContentData);

  console.log(ContentData);
  return (
    <div className="content">
      {section.map((section) => (
        <Section section={section}></Section>
      ))}
    </div>
  );
};

export default Content;
