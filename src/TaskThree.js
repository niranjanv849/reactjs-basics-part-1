import React from "react";
import "./TaskThree.css";
import Task from "./componentsForTaskThree/Task";
import ClearTask from "./componentsForTaskThree/ClearTask";

function TaskThree() {
  return (
    <div className="to__do">
      <h1>Todo App</h1>
      <div className="add__remainder">
        <input className="tt__input" type="text" placeholder="Add a new todo" />
        <button className="taskThreeButton">
          <img
            className="tt__img"
            src="https://i.ibb.co/qJKY5F1/addition.png"
            alt="Add Remainder"
          />
        </button>
      </div>
      <div className="remainder">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <ClearTask />
      </div>
    </div>
  );
}

export default TaskThree;
