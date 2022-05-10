import React from "react";
import OutputScreenRow from "../componentsForTaskTwo/OutputScreenRow";
import "./OutputScreen.css";
import { useState } from "react";

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <OutputScreenRow  data={props.data}/>
    </div>
  );
};

export default OutputScreen;
