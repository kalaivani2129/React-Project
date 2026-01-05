
import React, { useState } from "react";
import NewsBoard from "./NewsBoard";
import "./Categories.css";

const Categories = ({ category, setCategory }) => {
  const categories = ["technology", "sports", "entertainment", "health", "business"];
  const [flippedCategory, setFlippedCategory] = useState("");

  const handleClick = (cat) => {
    setCategory(cat);
    setFlippedCategory(cat);

   
    setTimeout(() => setFlippedCategory(""), 700);
  };

  return (
    <div className="categories-section container mt-5 pt-5">
      <h5 className="text-center mb-4">Explore Categories</h5>

      <div className="categories-cards">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`category-card ${category === cat ? "active" : ""} ${
              flippedCategory === cat ? "flipped" : ""
            }`}
            onClick={() => handleClick(cat)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h5>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h5>
              </div>
              <div className="card-back">
                <h5>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="category-news mt-4">
        <NewsBoard category={category} />
      </div>
    </div>
  );
};

export default Categories;

