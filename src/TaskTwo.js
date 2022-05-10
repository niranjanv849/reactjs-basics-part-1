import React from "react";
import "./TaskTwo.css";
import CalculatorTitle from "./componentsForTaskTwo/CalculatorTitle";
import OutputScreen from "./componentsForTaskTwo/OutputScreen";
import Button from "./componentsForTaskTwo/Button";
import { useState } from "react";

function TaskTwo() {
  const [data, setData] = useState(0);
  const event = (e) => {
    setData(e.target.value);
    console.log("value in inside of state " + data);
  };
  console.log("value in outside of state " + data);

  return (
    <div className="frame">
      <CalculatorTitle value="Calc Pro! - Calculations made easy" />
      <div className="mainCalc">
        <OutputScreen data={data} />
        <div className="button-row">
          <Button label={"Clear"} event={event} />
          <Button label={"Delete"} event={event} />
          <Button label={"."} event={event} />
          <Button label={"/"} event={event} />
        </div>
        <div className="button-row">
          <Button label={"7"} event={event} />
          <Button label={"8"} event={event} />
          <Button label={"9"} event={event} />
          <Button label={"*"} event={event} />
        </div>
        <div className="button-row">
          <Button label={"4"} event={event} />
          <Button label={"5"} event={event} />
          <Button label={"6"} event={event} />
          <Button label={"-"} event={event} />
        </div>
        <div className="button-row">
          <Button label={"1"} event={event} />
          <Button label={"2"} event={event} />
          <Button label={"3"} event={event} />
          <Button label={"+"} event={event} />
        </div>
        <div className="button-row">
          <Button label={"0"} event={event} />
          <Button label={"deg"} event={event} />
          <Button label={"π"} event={event} />
          <Button label={"="} event={event} />
        </div>
      </div>
    </div>
  );
}

export default TaskTwo;
