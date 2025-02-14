import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/83/45/97/834597d610554937549e1bca8830b625.jpg"
        />
        <span className="m4u-text">M4U</span>
      </div>
      <div className="nav-container">
        <div className="search">Search</div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCart = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oztbaqrxjlw8xnonvshd"
      />
      <h3>Bistro At 13</h3>
      <h4>Italian, Chinese, Bakery</h4>
      <h4>4.4 stars</h4>
      <h4>25-30 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
        <RestaurantCart />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
