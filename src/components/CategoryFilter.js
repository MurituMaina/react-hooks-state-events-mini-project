import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const buttons = categories.map((category, index) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        onClick={() => onSelectCategory(category)}
        key={index}
        className={className}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
