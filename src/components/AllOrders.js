import React from "react";
import "./AllOrders.css";

const AllOrders = () => {
  const allOrders = [
    {
      name: "Paneer Butter Masala",
      price: "₹350",
      payment: "Paid",
      status: "Delivered",
      date: "2024-03-20",
      customer: "Anshika rakheja",
    },
    {
      name: "Chicken Biryani",
      price: "₹280",
      payment: "Due",
      status: "Pending",
      date: "2024-03-19",
      customer: "Priya Sharma",
    },
    {
      name: "Masala Dosa",
      price: "₹120",
      payment: "Paid",
      status: "Return",
      date: "2024-03-18",
      customer: "Amit Verma",
    },
    {
      name: "Butter Naan",
      price: "₹60",
      payment: "Due",
      status: "In Progress",
      date: "2024-03-17",
      customer: "Kunal",
    },
    {
      name: "Tandoori Chicken",
      price: "₹450",
      payment: "Paid",
      status: "Delivered",
      date: "2024-03-16",
      customer: "Kushal sharma",
    },
    {
      name: "Chole Bhature",
      price: "₹180",
      payment: "Paid",
      status: "Delivered",
      date: "2024-03-15",
      customer: "Anjali Desai",
    },
    {
      name: "Rajma Chawal",
      price: "₹150",
      payment: "Due",
      status: "Pending",
      date: "2024-03-14",
      customer: "Vikram Joshi",
    },
    {
      name: "Vada Pav",
      price: "₹40",
      payment: "Paid",
      status: "In Progress",
      date: "2024-03-13",
      customer: "Pooja Iyer",
    },
  ];

  return (
    <div className="all-orders-container">
      <div className="all-orders-header">
        <h1>All Orders</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search orders..." />
            <button>🔍</button>
          </div>
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Delivered</button>
            <button className="filter-btn">Pending</button>
            <button className="filter-btn">In Progress</button>
            <button className="filter-btn">Return</button>
          </div>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>#{(1000 + index).toString()}</td>
                <td>{order.customer}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>{order.payment}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn">←</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <span>...</span>
        <button className="page-btn">10</button>
        <button className="page-btn">→</button>
      </div>
    </div>
  );
};

export default AllOrders;
