import React from "react";
import "./circular.css";

const CircularIcons = (props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.linkto}>
      <span className="circleIcon">
        <span className="circularBtn" style={props.circledimension}>
          <img src={props.icon} {...props} alt={props.alt} />
        </span>
        <span style={props.textstyle}>{props.text}</span>
      </span>
    </a>
  );
};

export default CircularIcons;
