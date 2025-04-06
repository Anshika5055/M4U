import React, { useState } from "react";
import { Link } from "react-router";
import "./Grocery.css";
import { categories, mockItems } from "../data/groceryData";

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  return (
    <div className="grocery-container">
      <div className="grocery-header">
        <h1 className="grocery-title">M4U GKart</h1>
        <p className="grocery-subtitle">
          🛒 Freshness at Your Doorstep – Everyday, Everytime!
        </p>
      </div>

      <div className="grocery-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grocery-items">
        {mockItems[selectedCategory]?.map((item) => (
          <div key={item.id} className="grocery-item-card">
            <img
              src={item.imageUrl}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60";
              }}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="item-footer">
              <span className="price">{formatPrice(item.price)}</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
