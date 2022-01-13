import React from "react";
import "./Section.css";
import data from "../../Data/data.json";
import About from "../../components/About/About";
import Roadmap from "../Roadmap/Roadmap";
import FAQ from "../FAQ/FAQ";

export const Section = () => {
  return (
    <div className="section">
      <div className="section__block">
        <About about={data.top}></About>
      </div>
      <div className="section__block">
        <h1 className="section__head">Roadmap</h1>
        {data.phases.map((phases, index) => (
          <Roadmap key={index} phases={phases}></Roadmap>
        ))}
      </div>
      <div className="section__block">
        <h1 className="section__head">FAQS</h1>
        {data.bottom.map((faq, index) => (
          <FAQ key={index} faq={faq}></FAQ>
        ))}
      </div>
    </div>
  );
};
