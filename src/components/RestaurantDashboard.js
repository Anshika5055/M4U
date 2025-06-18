import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./RestaurantDashboard.css";
import { Link } from "react-router";

const RestaurantDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Anshika",
      items: [
        { name: "Butter Chicken", quantity: 1, price: 350 },
        { name: "Naan", quantity: 2, price: 30 },
      ],
      total: 410,
      status: "pending",
      timestamp: new Date().toLocaleString(),
      address: "123 Main St, Bhiwani",
    },
  ]);

  const handleOrderStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="restaurant-dashboard">
      <div>
        {" "}
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
      </div>
      <h1>Restaurant Dashboard</h1>
      <div className="orders-section">
        <h2>New Orders</h2>
        {orders
          .filter((order) => order.status === "pending")
          .map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order.id}</h3>
                <span className="timestamp">{order.timestamp}</span>
              </div>
              <div className="customer-info">
                <p>
                  <strong>Customer:</strong> {order.customerName}
                </p>
                <p>
                  <strong>Delivery Address:</strong> {order.address}
                </p>
              </div>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} x {item.quantity} - ₹
                      {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p className="total">
                  <strong>Total:</strong> ₹{order.total}
                </p>
              </div>
              <div className="order-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleOrderStatus(order.id, "accepted")}
                >
                  Accept Order
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleOrderStatus(order.id, "rejected")}
                >
                  Reject Order
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="orders-section">
        <h2>Accepted Orders</h2>
        {orders
          .filter((order) => order.status === "accepted")
          .map((order) => (
            <div key={order.id} className="order-card accepted">
              <div className="order-header">
                <h3>Order #{order.id}</h3>
                <span className="timestamp">{order.timestamp}</span>
              </div>
              <div className="customer-info">
                <p>
                  <strong>Customer:</strong> {order.customerName}
                </p>
                <p>
                  <strong>Delivery Address:</strong> {order.address}
                </p>
              </div>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} x {item.quantity} - ₹
                      {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p className="total">
                  <strong>Total:</strong> ₹{order.total}
                </p>
              </div>
              <div className="order-actions">
                <button
                  className="complete-btn"
                  onClick={() => handleOrderStatus(order.id, "completed")}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantDashboard;
