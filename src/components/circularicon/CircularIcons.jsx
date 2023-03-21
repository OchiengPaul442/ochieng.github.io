import React from "react";
import "./circular.css";

const CircularIcons = (props) => {
  return (
    <div className="circleIcon">
      <span className="circularBtn" style={props.circledimension}>
        <img src={props.icon} {...props} alt={props.alt} />
      </span>
      <span style={props.textstyle}>{props.text}</span>
    </div>
  );
};

export default CircularIcons;
