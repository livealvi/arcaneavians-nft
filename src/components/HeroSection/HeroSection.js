import React from "react";
import Header from "../Header/Header";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero__content">
        <h1> ARCANE AVIANS </h1> <p> Baddest birds on the blockchain </p>
      </div>
    </div>
  );
};

export default HeroSection;
