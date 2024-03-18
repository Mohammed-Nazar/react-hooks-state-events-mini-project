import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, onChangeItem, addItem}) {
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input value={addItem?.text} onChange={onChangeItem} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={addItem?.category} onChange={onChangeItem} name="category">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
