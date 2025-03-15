import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import Chatbot from "./components/Chatbot.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//19
function App() {
  return (
    <div className="AppCh">
      <Chatbot /> {/* This will display the chatbot */}
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <App /> {/* This will display the chatbot */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
