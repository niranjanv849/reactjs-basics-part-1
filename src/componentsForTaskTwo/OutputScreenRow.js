import React from "react";
import "./OutputScreenRow.css";
import { useState } from "react";

function OutputScreenRow(props) {
  // const [inputData, setInputData] = useState();
  // const [inputData,setInputData] = useState();
  // const [inputData,setInputData] = useState();
  // const [inputData,setInputData] = useState();

  // const [outputData, setOutputData] = useState();

  return (
    <div className="screen-row">
      <input
        className="screen__inp"
        type="String"
        value={props.data}
        readOnly
      />
      <input
        className="screen__inp2"
        type="String"
        value={props.data}
        readOnly
      />
    </div>
  );
}

export default OutputScreenRow;
