// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router";
// import Login from "./Login";
// import useOnlineStatus from "../utils/useOnlineStatus";
// export const Header = () => {
//   const [btnName, setBtnName] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo" src={LOGO_URL} />
//       </div>
//       <div className="nav-container">
//         <div className="nav-items">
//           <ul>
//             <li className="status">
//               Online status: {onlineStatus ? "🟢" : "🔴"}
//             </li>
//             <li>
//               <Link to="/">
//                 <button className="nav-button">Home</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/about">
//                 <button className="nav-button">About Us</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact">
//                 <button className="nav-button">Contact Us</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/cart">
//                 <button className="nav-button">Cart</button>
//               </Link>
//             </li>

//             <li>
//               <Link to="/login">
//                 <button className="btn2">{btnName}</button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router";
import Login from "./Login";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useAuth } from "../context2/AuthContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <li className="status">
              Online status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li>
              <Link to="/">
                <button className="nav-button">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="nav-button">About Us</button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="nav-button">Contact Us</button>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <button className="nav-button">Cart</button>
              </Link>
            </li>

            <li>
              {!isLoggedIn ? (
                <Link to="/login">
                  <button className="btn2">Login</button>
                </Link>
              ) : (
                <button className="btn2" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
