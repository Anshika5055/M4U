import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("userToken") !== null;

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate GST (18%)
  const gst = subtotal * 0.18;

  // Calculate delivery fee
  const deliveryFee = deliveryOption === "express" ? 50 : 0;

  // Calculate total
  const total = subtotal + gst + deliveryFee;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    // Here you would typically handle the payment processing
    alert("Order placed successfully!");
    clearCart();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-section">
        <h3>Order Summary</h3>
        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="bill-details">
          <div className="bill-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>GST (18%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="bill-row total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="checkout-section">
        <h3>Delivery Options</h3>
        <div className="delivery-options">
          <label>
            <input
              type="radio"
              value="standard"
              checked={deliveryOption === "standard"}
              onChange={(e) => setDeliveryOption(e.target.value)}
            />
            Standard Delivery - ₹0
          </label>
          <label>
            <input
              type="radio"
              value="express"
              checked={deliveryOption === "express"}
              onChange={(e) => setDeliveryOption(e.target.value)}
            />
            Express Delivery - ₹50
          </label>
        </div>
      </div>

      <div className="checkout-section">
        <h3>Payment Method</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card🔴🟠
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery 💵
          </label>
        </div>
      </div>

      <button className="proceed-payment" onClick={handlePaymentSubmit}>
        Proceed to Payment
      </button>

      {showLoginModal && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>You are not logged in. Please login to proceed.</p>
            <div className="popup-buttons">
              <button onClick={handleLogin}>Login</button>
              <button onClick={() => setShowLoginModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
