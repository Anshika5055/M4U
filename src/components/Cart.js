// const Cart = () => {
//   return (
//     <div className="Cart-m4u">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
//         alt="cart"
//         width="100"
//         height="100"
//       />
//       <h1 className="cart1"> OOPS,Cart is Empty </h1>
//     </div>
//   );
// };

// export default Cart;
// import React from "react";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="Cart-m4u">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
          alt="cart"
          // width="100"
          // height="100"
          style={{ width: "30%", height: "30%", marginBottom: "20px" }}
        />
        <h1 className="cart1">OOPS, Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.imageUrl || "https://i.ibb.co/jF03xY4/no-restraunt.png"}
              alt={item.name}
              className="cart-item-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://i.ibb.co/jF03xY4/no-restraunt.png";
              }}
            />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
              <div className="cart-item-controls">
                <div className="cart-item-quantity">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ₹{calculateTotal()}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
