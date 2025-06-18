import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import Chatbot from "./components/Chatbot.js";
import VideoModal from "./components/VideoModal.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useLocation,
} from "react-router";
import { AuthProvider } from "./context2/AuthContext";

import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import Grocery from "./components/Grocery";
import Checkout from "./components/Checkout.js";
import { CartProvider } from "../context/cartContext.js";
import { RestaurantProvider } from "../context/RestaurantContext.js";
import RestaurantDashboard from "./components/RestaurantDashboard.js";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import AllOrders from "./components/AllOrders";
import RestaurantLogin from "./components/RestaurantLogin";

// const About = lazy(() => import("./components/About.js"));

const Grocery = lazy(() => import("./components/Grocery"));
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("restaurantToken");
  if (!token) {
    return <Navigate to="/restaurant-login" replace />;
  }
  return children;
};

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <AuthProvider>
      <CartProvider>
        <RestaurantProvider>
          <Header />
          <Outlet />
          {isHomePage && <Footer />}
          <Chatbot />
          <VideoModal />
        </RestaurantProvider>
      </CartProvider>
    </AuthProvider>
  );
};
const DashboardLayout = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // <Suspense fallback={<h1>Loading</h1>}>
        //   <About />
        // </Suspense>
        // ),
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
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant-dashboard",
        element: <RestaurantDashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/restaurant-login",
        element: <RestaurantLogin />,
      },
    ],
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
