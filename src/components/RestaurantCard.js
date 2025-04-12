import { CDN_URL } from "../utils/constants";
import "../../cards.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-content">
        <h4 className="res-name2">{name}</h4>
        <p className="res-cuisines">{cuisines.join(", ")}</p>

        <div className="res-details">
          <div className="res-rating">
            <span className="rating-label">Rating:</span> {avgRating} ⭐
          </div>
          <div className="res-cost">
            <span className="cost-label">Cost:</span> {costForTwo}
          </div>
          <div className="res-time">
            <span className="time-label">Delivery:</span> {deliveryTime} mins
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="res-card-wrapper">
      <label className="promoted-badge">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
