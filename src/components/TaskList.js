import React from "react";
import Task from "./Task";

function TaskList({ categories, tasks, deleteTask }) {
  console.log(categories);
  let task = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        deleteTask={deleteTask}
      />
    );
  });
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {task}
    </div>
  );
}

export default TaskList;
