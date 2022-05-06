import React from "react";
import "./TaskOne.css";
import { ReplayOutlined } from "@material-ui/icons";
// import grey from "@material-ui/core/colors/grey";
import { useState } from "react";

function TaskOne() {
  // const [Temp, setTemp] = useState();
  const celsius = "";
  const fahrenheit = "";

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // function toFahrenheit(celsius) {
  //   return (celsius * 9) / 5 + 32;
  // }

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
          // value={celsius}
          // onChange={this.handleCelsiusChange}
        />
        <ReplayOutlined style={{ color: "grey" }} />
        <input
          className="conversion__input"
          type="number"
          placeholder="33.8 Fahrenheit"
          // value={fahrenheit}
          // onChange={this.handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default TaskOne;
