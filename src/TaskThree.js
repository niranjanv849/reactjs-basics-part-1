import React, { useState } from "react";
import "./TaskThree.css";
import Task from "./componentsForTaskThree/Task";
import ClearTask from "./componentsForTaskThree/ClearTask";

function TaskThree(props) {
  const [data, setData] = useState([]);
  const [inputdata, setInputData] = useState("");
  return (
    <div className="to__do">
      <h1>Todo App</h1>
      <div className="add__remainder">
        <input
          className="tt__input"
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Add a new todo"
          value={inputdata}
        />
        <button
          onClick={(e) => {
            setData([...data, inputdata]);
            setInputData("");
          }}
          className="taskThreeButton"
        >
          <img
            className="tt__img"
            src="https://i.ibb.co/qJKY5F1/addition.png"
            alt="Add Remainder"
          />
        </button>
      </div>
      {/* <Task data={data} /> */}
      <div className="remainder">
        {data
          ? data.map((x, index) => {
              return (
                <div key={index}>
                  <Task data={x} />
                </div>
              );
            })
          : null}
        <ClearTask setData={setData} />
      </div>
    </div>
  );
}

export default TaskThree;
