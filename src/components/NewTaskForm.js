import React from "react";
import { CATEGORIES } from "../data";
import { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  let options = CATEGORIES.map((option, index) => {
    return <option key={index}>{option}</option>;
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(category);
    document.getElementById("new-task-form").reset();
  }
  return (
    <form className="new-task-form" id="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          onBlur={(e) => setText(e.target.value)}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select name="category" onClick={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
