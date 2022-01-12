import React from "react";
import "./FAQ.css";

const FAQ = (props) => {
  const { Question, Answer } = props.faq;

  return (
    <div className="faqs">
      <p className="faqs__question">{Question}</p>
      <p>{Answer}</p>
    </div>
  );
};

export default FAQ;
