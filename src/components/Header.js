import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
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
