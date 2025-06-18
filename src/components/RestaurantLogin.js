import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./RestaurantLogin.css";

// Mock restaurant data
const MOCK_RESTAURANTS = {
  "res1@gmail.com": {
    passkey: "res123",
    restaurantInfo: {
      name: "Tasty Bites",
      cuisines: ["North Indian", "Chinese"],
      logoUrl: "https://i.ibb.co/WWYdHrjJ/Untitled-design-1.png",
      stats: {
        views: "1,504",
        orders: "80",
        revenue: "24,842",
        rating: "4.5",
      },
    },
  },
  "res2@gmail.com": {
    passkey: "fres234",
    restaurantInfo: {
      name: "Pizza Paradise",
      cuisines: ["Italian", "Fast Food"],
      logoUrl: "https://i.ibb.co/WWYdHrjJ/Untitled-design-1.png",
      stats: {
        views: "2,104",
        orders: "95",
        revenue: "32,150",
        rating: "4.3",
      },
    },
  },
};

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if restaurant exists in mock data
    const restaurant = MOCK_RESTAURANTS[email];

    if (restaurant && restaurant.passkey === passkey) {
      // Create a mock token
      const token = btoa(email + ":" + Date.now());

      // Store restaurant data and token in localStorage
      localStorage.setItem("restaurantToken", token);
      localStorage.setItem(
        "restaurantInfo",
        JSON.stringify(restaurant.restaurantInfo)
      );
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="restaurant-login1">
      <div className="containerres1">
        <div className="login-banner">
          <div className="banner-content">
            <h2>Welcome to Restaurant Dashboard</h2>
            <p>
              Manage your restaurant, track orders, and grow your business with
              our powerful dashboard.
            </p>
            <img
              src="https://i.ibb.co/Ldk15ZqK/Copy-of-Untitled-Design-2.png"
              alt="Restaurant Dashboard"
              className="banner-image"
            />
          </div>
        </div>

        <div className="login-containerdash">
          <div className="login-header">
            <img
              src="https://i.ibb.co/Fbmmwk6R/Untitled-design-1.png"
              alt="Logo"
              className="login-logo"
            />

            <h1>Restaurant Login</h1>
            <p>Access your dashboard</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="passkey">Passkey</label>
              <input
                type="password"
                id="passkey"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter your passkey"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login to Dashboard
            </button>
          </form>

          <div className="login-footer">
            <p className="support-text">
              Don't have a passkey? Contact support
            </p>
            <a href="/contact" className="contact-support">
              Get Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
