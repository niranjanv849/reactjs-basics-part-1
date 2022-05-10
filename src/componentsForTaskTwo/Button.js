import React from "react";
import "./Button.css";

const Button = (props) => {
  return <input className="btn__element" type="button" value={props.label} />;
};

// Export our button component.
export default Button;
