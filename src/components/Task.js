import React from "react";

function Task({category, text, callback}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=> callback(category,text)} className="delete">X</button>
    </div>
  );
}

export default Task;
