import "../../menu.css";
import Shimmer from "./Shimmer";
import { imageUrl } from "../utils/constants";
import CollapsibleSection from "./CollapsibleSection";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useCart } from "../../context/cartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, categories } = useRestaurantMenu(resId);
  const { addToCart, cartItems, removeFromCart, updateQuantity } = useCart();

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const backupImageUrl = "https://i.ibb.co/jF03xY4/no-restraunt.png";

  const handleQuantityChange = (itemId, change) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    const newQuantity = Math.max(0, currentQuantity + change);

    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.price / 100 || item.card.info.defaultPrice / 100,
      imageUrl: item.card.info.imageId
        ? imageUrl + item.card.info.imageId
        : backupImageUrl,
      description:
        item.card.info.description || `${item.card.info.name} from ${name}`,
      restaurantName: name,
      restaurantId: resId,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="menu">
      <h1 className="res-name">{name}</h1>
      <div className="menu-header">
        <p>📍 Area Name: {areaName}</p>
        <p className="rating"> ⭐️ Rating: {avgRating} </p>
        <p>🍜 Cuisines: {cuisines?.join(", ")}</p>
        <p>💸 Cost for Two: {costForTwoMessage}</p>
      </div>

      <h2>Menu</h2>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div key={index}>
            <CollapsibleSection
              title={category?.card?.card?.title}
              description={category?.card?.card?.itemCards}
            >
              <ul className="list">
                {category?.card?.card?.itemCards?.map((item, idx) => {
                  const mainImageUrl = imageUrl + item.card.info.imageId;
                  const cartItem = cartItems.find(
                    (cartItem) => cartItem.id === item.card.info.id
                  );

                  return (
                    <li key={idx} className="menu-item">
                      <div className="menu-items">
                        <strong className="menu-name">
                          {item.card.info.name}
                        </strong>
                        <div className="desc">
                          <span>{item.card.info.description}</span>
                        </div>
                        <div className="price1">
                          ₹
                          {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                        </div>
                      </div>

                      <div className="menu-image-wrapper">
                        <img
                          src={mainImageUrl}
                          alt={item.card.info.name}
                          className="menu-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = backupImageUrl;
                          }}
                        />

                        <div className="add-to-cart-container">
                          {cartItem ? (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                  "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(94, 126, 234, 1) 0%, rgba(147, 68, 210, 1) 100%)",
                                borderRadius: "0.75rem",
                                padding: "6px 10px",
                                boxShadow:
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
                                width: "fit-content",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "16px",
                                gap: "12px",
                                marginTop: "10px",
                                position: "fixed",
                              }}
                            >
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.card.info.id, -1)
                                }
                                style={{
                                  border: "none",
                                  background: "transparent",
                                  color: "white",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                              >
                                −
                              </button>
                              <span>{cartItem.quantity}</span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.card.info.id, 1)
                                }
                                style={{
                                  border: "none",
                                  background: "transparent",
                                  color: "white",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="add-to-cart-btn"
                              onClick={() => handleAddToCart(item)}
                              style={{
                                position: "absolute",
                                bottom: "-10px",
                                left: "15%",
                                // transform: "translateX(-50%)",
                                padding: "10px 18px",
                                background:
                                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,126,234,1) 0%, rgba(147,68,210,1) 100%)",
                                borderRadius: "12px",
                                color: "white",
                                border: "none",
                                fontWeight: "bold",
                                fontSize: "16px",
                                cursor: "pointer",
                                boxShadow:
                                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.1)",
                              }}
                            >
                              Add+
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleSection>
          </div>
        ))
      ) : (
        <p>📌 No menu available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
