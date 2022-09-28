import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories: categoryList }) {
  const [category, setCategory] = useState("");
  const [text, setDetails] = useState("");

  let options = categoryList.map((option, index) => {
    return option !== "All" ? <option key={index}>{option}</option> : null;
  });

  function formSubmit(e){
    
 e.preventDefault();
 if(text === "" || category === ""){
  alert("Fill in the Blanks")
 }
 else{
      onTaskFormSubmit({ text, category });
      setDetails("");
      setCategory("");}
    
  }
  return (
    <form
      className="new-task-form"
      onSubmit={formSubmit}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}

          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
