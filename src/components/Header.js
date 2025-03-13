import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <span className="m4u-text">M4U</span>
      </div>
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <button className="Home">Home</button>
            <button className="About Us">About Us</button>
            <button className="Contact Us">Contact Us</button>
            <button className="Cart">Cart</button>

            <button
              className="btn2"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
