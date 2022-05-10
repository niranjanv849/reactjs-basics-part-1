import React, { useState } from "react";
import "./Button.css";
// import { useState } from "react";

const Button = (props) => {
  return (
    <input
      className="btn__element"
      type="button"
      value={props.label}
      onClick={(e) => props.event(e)}
    />
  );
};

// Export our button component.
export default Button;
