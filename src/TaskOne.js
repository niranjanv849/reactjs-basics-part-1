import React from "react";
import "./TaskOne.css";
import { ReplayOutlined } from "@material-ui/icons";
import grey from "@material-ui/core/colors/grey";
import { useState, useEffect } from "react";

function TaskOne() {
  const [Temp, setTemp] = useState();

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
        />
        <ReplayOutlined style={{ color: "grey" }} />
        <input
          className="conversion__input"
          type="number"
          placeholder="33.8 Fahrenheit"
        />
      </div>
    </div>
  );
}

export default TaskOne;
