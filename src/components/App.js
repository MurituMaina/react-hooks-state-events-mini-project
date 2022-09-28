import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  
  function onTaskFormSubmit(newTask) {
  setTasks([...tasks, newTask]);
  }
  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  function handleDeleteTask(deleteTask) {
    setTasks(tasks.filter((task) => task.text !== deleteTask));
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      {/* {categories} */}
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        categories={CATEGORIES}
        tasks={visibleTasks}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
