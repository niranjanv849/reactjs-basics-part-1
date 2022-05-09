import React from "react";
import "./TaskOne.css";
import { ReplayOutlined } from "@material-ui/icons";
// import grey from "@material-ui/core/colors/grey";
import { useState } from "react";

function TaskOne() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const toFahrenheit = (e) => {
    console.log(e.target.value);

    setCelsius(e.target.value);
    setFahrenheit((e.target.value * 9) / 5 + 32);
  };
  const toCelsius = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(((e.target.value - 32) * 5) / 9);
  };

  return (
    <div className="taskOne">
      <div>
        <span className="conve">Conv:</span> Celsius 🔄 Fahrenheit
      </div>
      <div>Simple, quick °C to °F conversion</div>
      <div className="conversion__container">
        <input
          className="conversion__input"
          type="number"
          placeholder="1 Celsius"
          value={celsius}
          onChange={(e) => toFahrenheit(e)}
        />
        <ReplayOutlined style={{ color: "grey" }} />
        <input
          className="conversion__input"
          type="number"
          placeholder="33.8 Fahrenheit"
          value={fahrenheit}
          onChange={(e) => toCelsius(e)}
        />
      </div>
    </div>
  );
}

export default TaskOne;
