import { useEffect, useState } from "react";
import React from "react";
import "../../menu.css";
import Shimmer from "./Shimmer";
import { imageUrl } from "../utils/constants";
import CollapsibleSection from "./CollapsibleSection";
import { useParams } from "react-router";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(Menu_API + resId);
      const json = await response.json();
      setResInfo(json.data);
      console.log("Fetched Data:", json.data);

      // Extract menu categories
      const menuCategories =
        json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (category) =>
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setCategories(menuCategories);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    availability,
    areaName,
    avgRating,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const backupImageUrl =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpe1nagwb2FeNU7bJc9-tUZaGD8cirpKzkYqvUWHCu-O0XXkKb"; // Backup image

  return (
    <div className="menu">
      <h1 className="res-name">{name}</h1>
      <div className=" menu-header">
        <p>📍Area Name: {areaName}</p>
        <p> ⭐️Rating: {avgRating} </p>
        <p>🍜Cuisines: {cuisines?.join(", ")}</p>
        <p>💸costForTwo:{costForTwoMessage}</p>
      </div>
      <h2>Menu</h2>
      {categories.map((category, index) => (
        <CollapsibleSection key={index} title={category.card.card.title}>
          <div key={index} className="category">
            {/* <h2 className="titlemenu">{category.card.card.title}</h2> */}
            <ul className="list">
              {category.card.card.itemCards?.map((item, idx) => {
                const mainImageUrl = imageUrl + item.card.info.imageId;

                return (
                  <li key={idx} className="menu-item">
                    <div className="menu-items">
                      <strong>{item.card.info.name}</strong>
                      <div className="price">
                        - ₹
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </div>
                    </div>

                    {/* Image with fallback */}
                    <img
                      src={mainImageUrl}
                      alt="Food item"
                      className="menu-image"
                      onError={(e) => {
                        console.log("Image failed to load:", mainImageUrl);
                        e.target.src = backupImageUrl;
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </CollapsibleSection>
      ))}
    </div>
  );
};

export default RestaurantMenu;
