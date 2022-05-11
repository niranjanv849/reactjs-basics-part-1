import React from "react";
import "./Task.css";

function Task(props) {
  return (
    <div className="task">
      <div>
        <p>{props.data}</p>
      </div>
      <div>
        <button className="delete__btn">
          <img
            className="delete__task"
            src="https://i.ibb.co/HBDXWsc/3073440.png"
            alt="Delete Remainder"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
