import React, { useState } from "react";
import { LOGIN_URL } from "../utils/constants";
import login from "../assets/login.mp4";

const Login = () => {
  const [btnName, setBtnName] = useState("Login");
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length !== 5) {
      setMessage("Password must be exactly 5 characters!");
    } else {
      setBtnName("Logout"); // ✅ Updating Header's button text
      setPopupMessage("Successful login! Foodie has come 🍕🍔");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };
  return (
    <div className="login-container">
      <video autoPlay muted loop className="video-lg">
        <source src={login} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-modal">
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="floating-label">Username</label>
              <input type="text" required className="input-field" />
            </div>
            <div className="input-container">
              <label className="floating-label">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="input-field"
                  maxLength="5"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>
            </div>
            {message && (
              <div
                className="error-message"
                style={{
                  color: "red",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {message}
              </div>
            )}
            <div className="button-group">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
          <button className="signup-btn" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        </div>
      </div>

      {showSignup && (
        <div className="signup-modal">
          <div className="signup-content">
            <span className="close" onClick={() => setShowSignup(false)}>
              &times;
            </span>
            <h2 className="signup-title">Sign Up</h2>
            <form>
              <div className="input-container">
                <label className="floating-label">New Username</label>
                <input type="text" required className="input-field" />
              </div>
              <div className="input-container">
                <label className="floating-label">Password</label>
                <div className="password-container">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    required
                    className="input-field"
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? "👁️" : "🙈"}
                  </span>
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="signup-btn">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPopup && (
        <div
          className="popup-message"
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "black",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
