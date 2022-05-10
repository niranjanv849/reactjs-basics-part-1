import React from "react";
import "./CalculatorTitle.css";
function CalculatorTitle(props) {
  return <div className="calc__title">{props.value}</div>;
}

export default CalculatorTitle;
