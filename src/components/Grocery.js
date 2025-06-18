import React, { useState } from "react";
import { Link } from "react-router";
import "./Grocery.css";
import { categories, mockItems } from "../data/groceryData";
import { useCart } from "../../context/cartContext";

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart, cartItems, removeFromCart, updateQuantity } = useCart();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      description: item.description,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  const handleQuantityChange = (itemId, change) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    const newQuantity = Math.max(0, currentQuantity + change);

    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
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
        {mockItems[selectedCategory]?.map((item) => {
          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
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
              <div className="item-quantity">
                <span className="quantity-label">Quantity:</span>{" "}
                {item.quantity}
              </div>
              <div className="item-footer">
                <span className="price">{formatPrice(item.price)}</span>
                <div
                  className="add-to-cart-container"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "visible",
                    paddingRight: "10%",
                  }}
                >
                  {cartItem ? (
                    <div
                      className="quantity-controls"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(65, 80, 109, 1) 0%, rgba(90, 125, 237, 1) 100%, rgba(152, 119, 227, 1) 100%)",
                          color: "white",
                          border: "none",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </button>
                      <span className="quantity-display">
                        {cartItem.quantity}
                      </span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 1)}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(65, 80, 109, 1) 0%, rgba(90, 125, 237, 1) 100%, rgba(152, 119, 227, 1) 100%)",
                          color: "white",
                          border: "none",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(65, 80, 109, 1) 0%, rgba(90, 125, 237, 1) 100%, rgba(152, 119, 227, 1) 100%)",
                        color: "white",
                        border: "none",
                        padding: "6px 16px",
                        borderRadius: "5px",
                        fontWeight: "500",
                        fontSize: "14px",
                        cursor: "pointer",
                        height: "30px",
                        display: "inline-block",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        overflow: "visible",
                        textOverflow: "unset",
                        maxWidth: "none",
                        marginLeft: "55px",
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grocery;
