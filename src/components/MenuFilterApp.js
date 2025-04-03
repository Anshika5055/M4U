import React, { useState, useEffect } from "react";

const MenuFilterApp = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        // Extract restaurant data from the Swiggy JSON structure
        const restaurantData = data.data.cards
          .filter(
            (card) =>
              card.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )
          .map((card) => card.card.card.info);
        setRestaurants(restaurantData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Extract unique cuisines
  const cuisines = Array.from(
    new Set(restaurants.flatMap((restaurant) => restaurant.cuisines))
  );

  // Filter restaurants by selected cuisine
  const filteredRestaurants = selectedCuisine
    ? restaurants.filter((restaurant) =>
        restaurant.cuisines.includes(selectedCuisine)
      )
    : restaurants;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Cuisine Filter</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCuisine === cuisine ? "bg-blue-700" : "bg-blue-500"
            }`}
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <div>
        {filteredRestaurants.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRestaurants.map((restaurant) => (
              <li
                key={restaurant.id}
                className="border p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.areaName}</p>
                <p className="text-sm text-gray-500">
                  Cuisines: {restaurant.cuisines.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Rating: {restaurant.avgRating} ⭐
                </p>
                <p className="text-sm text-gray-500">
                  Cost for two: {restaurant.costForTwoMessage}
                </p>
                <p className="text-sm text-gray-500">
                  Delivery time: {restaurant.sla.slaString}
                </p>
                {restaurant.aggregatedDiscountInfo?.header && (
                  <p className="text-sm text-green-600 font-semibold">
                    {restaurant.aggregatedDiscountInfo.header}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants found for {selectedCuisine}</p>
        )}
      </div>
    </div>
  );
};

export default MenuFilterApp;
