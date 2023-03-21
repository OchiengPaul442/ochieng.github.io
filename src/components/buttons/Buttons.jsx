import React from "react";
import "./btn.css";

export const RecButtons = (props) => {
  return (
    <button onClick={props.onPress} className="button" {...props}>
      <img src={props.icon} style={props.iconstyle} alt="resume" />
      {props.text}
    </button>
  );
};

export const RecBtn = (props) => {
  return (
    <button type="submit" name="submit" className="button" {...props}>
      {props.text}
    </button>
  );
};
