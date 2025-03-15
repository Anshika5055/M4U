import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import Chatbot from "./components/Chatbot.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//19
function App() {
  return (
    <div className="AppCh">
      <Chatbot />
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <App />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
  (exact = "true"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
