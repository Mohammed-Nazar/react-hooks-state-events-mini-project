import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks , setTasks] = useState(TASKS);
  const [addItem, setAddItem]= useState({
    text: "",
    category: ""
  })


  const onChangeItem = (e)=>{
    setAddItem({
      ...addItem,
      [e.target.name]: e.target.value
    })
  }

  const onTaskFormSubmit = (e)=>{
    e.preventDefault();
    setTasks([...tasks, addItem]);
    setAddItem({
      text: "",
      category: ""
    })
  }


  function onClickFilter(e) {
    const category = e.target.name;
    e.target.className == "selected"? e.target.className ="" : e.target.className = "selected";
    if (category === "All") {
      return setTasks(TASKS);
    }
  
    return setTasks(TASKS.filter((task)=> task.category === category))
  }





  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} callback={onClickFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} addItem={addItem} onChangeItem={onChangeItem}  />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
