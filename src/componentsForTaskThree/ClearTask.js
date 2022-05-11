import React from "react";
import "./ClearTask.css";
function ClearTask(props) {
  return (
    <div>
      <button onClick={(e) => props.setData([])} className="clear__task">
        Delete all active tasks
      </button>
    </div>
  );
}

export default ClearTask;
