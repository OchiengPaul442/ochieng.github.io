import React from "react";
import "./scroll.css";
import { downarrow } from "../../constants";

const Scroll = (props) => {
  // smooth scroll to next section
  const scrollToNextSection = () => {
    const element = document.getElementById(props.to);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scrollToNextSection} {...props} className="downarrow">
      <img src={downarrow} alt="downarrow" />
    </button>
  );
};

export default Scroll;
