import React from "react";

function Task({text, category, deleteTask}) {
  function deleteButton(e){
    e.preventDefault();
    deleteTask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteButton} className="delete">X</button>
    </div>
  );
}

export default Task;
