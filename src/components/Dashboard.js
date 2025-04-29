import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router";
import Shimmer from "./Shimmer";

const Dashboard = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("restaurantToken");
    if (!token) {
      navigate("/restaurant-login");
      return;
    }

    // Fetch restaurant data
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurant/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          setRestaurantData(data);
        } else {
          // Handle invalid token
          localStorage.removeItem("restaurantToken");
          localStorage.removeItem("restaurantInfo");
          navigate("/restaurant-login");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("restaurantToken");
    localStorage.removeItem("restaurantInfo");
    navigate("/restaurant-login");
  };

  if (loading) return <Shimmer />;

  const stats = [
    {
      title: "Daily Views",
      value: restaurantData?.stats?.views || "0",
      icon: "👁️",
    },
    { title: "Sales", value: restaurantData?.stats?.orders || "0", icon: "🛒" },
    {
      title: "Profit",
      value: `₹${restaurantData?.stats?.revenue || "0"}`,
      icon: "💰",
    },
    {
      title: "Rating",
      value: restaurantData?.stats?.rating || "0",
      icon: "⭐",
    },
  ];

  return (
    <div className="dashboard-container">
      <Link to="/" className="home-button">
        <button className="btn-home">Home</button>
      </Link>
      <div className="dashboard">
        <div className="sidebar">
          <div className="logodash">
            <img
              src={
                restaurantData?.restaurant?.logoUrl ||
                "https://i.ibb.co/WWYdHrjJ/Untitled-design-1.png"
              }
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </div>
          <nav>
            <Link to="/dashboard" className="nav-item actived">
              <span>🏠</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/menu-management" className="nav-itemd">
              <span>🍽️</span>
              <span>Menu</span>
            </Link>
            <Link to="/orders" className="nav-itemd">
              <span>📦</span>
              <span>Orders</span>
            </Link>
            <Link to="/reviews" className="nav-itemd">
              <span>⭐</span>
              <span>Reviews</span>
            </Link>
            <Link to="/settings" className="nav-itemd">
              <span>⚙️</span>
              <span>Settings</span>
            </Link>
            <button onClick={handleLogout} className="nav-item logoutd">
              <span>🔒</span>
              <span>Logout</span>
            </button>
          </nav>
        </div>

        <div className="main-content">
          <div className="dashboard-header">
            <div className="restaurant-info">
              <h1>
                {restaurantData?.restaurant?.name || "Restaurant Dashboard"}
              </h1>
              <p>{restaurantData?.restaurant?.cuisines?.join(", ")}</p>
            </div>
            <div className="user-profile">
              <img
                src={
                  restaurantData?.restaurant?.logoUrl ||
                  "https://i.ibb.co/WWYdHrjJ/Untitled-design-1.png"
                }
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-content">
            <div className="recent-orders">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <Link to="/all-orders" className="view-all">
                  View All
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurantData?.recentOrders?.map((order) => (
                    <tr key={order.orderId}>
                      <td>#{order.orderId}</td>
                      <td>{order.customerName}</td>
                      <td>{order.items.length} items</td>
                      <td>₹{order.total}</td>
                      <td>
                        <span
                          className={`status ${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="recent-reviews">
              <div className="section-header">
                <h2>Recent Reviews</h2>
              </div>
              <div className="reviews-list">
                {restaurantData?.recentReviews?.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>{review.customerName}</h4>
                        <div className="rating">{review.rating} ⭐</div>
                      </div>
                      <span className="review-date">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
