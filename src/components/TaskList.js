import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {

  const handleDelete = (category, text)=>{
    setTasks(tasks.filter((task)=> (task.text !== text)))
  }

  return (
    <div className="tasks">
      {tasks.map((task)=> <Task callback={handleDelete} key={task.text} category={task.category} text={task.text}/>)}
    </div>
  );
}

export default TaskList;
