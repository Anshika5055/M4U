import React, { useState } from "react";
import { LOGIN_URL } from "../utils/constants";
import log from "../assets/log.mp4";

const Login = () => {
  const [btnName, setBtnName] = useState("Login");
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length >= 5) {
      setMessage("");
    } else {
      setMessage("Password must contain atleast 5 characters!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 5) {
      setMessage("Password must contain atleast 5 characters!");
    } else {
      setBtnName("Logout"); // ✅ Updating Header's button text
      setPopupMessage("Successful login! Foodie has come 🍕🍔");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setMail(e.target.value);
    console.log(mail);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const login = async () => {
    await fetch("http://localhost:5001/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["msg"] === "Logged In") {
          if (data["user"]["is_verified"] === 1) {
            console.log("Logged In success");
            window.alert("Logged In success");
            setMail("");
            setPassword("");
          } else {
            console.log("user Not Verified");
          }
        }
      });
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const signup = async () => {
    const result = await fetch("http://localhost:5001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: mail,
        password: password,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowSignup(false);
        // if (data['msg'] == "Logged In") {
        //     console.log("Logged In success")
        //     navigate('/')
        // }
      });
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop className="video-lg">
        <source src={log} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-modal">
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="floating-label">Username</label>
              <input
                placeholder="username or email"
                type="text"
                required
                className="input-field"
                name="mail"
                onChange={emailChangeHandler}
              />
            </div>
            <div className="input-container">
              <label className="floating-label">Password</label>
              <div className="password-container">
                <input
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="input-field"
                  maxLength="20"
                  onChange={passwordChangeHandler}
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
              <button type="submit" className="login-btn" onClick={login}>
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
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="floating-label">Name</label>
                <input
                  placeholder="Type Here"
                  type="text"
                  required
                  className="input-field"
                  name="name"
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="input-container">
                <label className="floating-label">Email</label>
                <input
                  placeholder="Type Here"
                  type="text"
                  required
                  className="input-field"
                  name="mail"
                  onChange={emailChangeHandler}
                />
              </div>
              <div className="input-container">
                <label className="floating-label">Phone</label>
                <input
                  placeholder="Type Here"
                  type="text"
                  required
                  className="input-field"
                  name="phone"
                  onChange={phoneChangeHandler}
                />
              </div>
              <div className="input-container">
                <label className="floating-label">Password</label>
                <div className="password-container">
                  <input
                    placeholder="Type Here"
                    type={showSignupPassword ? "text" : "password"}
                    required
                    className="input-field"
                    name="password"
                    onChange={passwordChangeHandler}
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
                <button type="submit" className="signup-btn" onClick={signup}>
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
