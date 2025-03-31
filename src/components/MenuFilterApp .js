import React, { useState, useEffect } from "react";

const MenuFilterApp = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/menu.json") // Update the path as needed
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Extract unique menu items
  const menuItems = Array.from(
    new Set(restaurants.flatMap((restaurant) => restaurant.menu))
  );

  // Filter restaurants by selected menu item
  const filteredRestaurants = selectedMenuItem
    ? restaurants.filter((restaurant) =>
        restaurant.menu.includes(selectedMenuItem)
      )
    : restaurants;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Menu Filter</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {menuItems.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedMenuItem === item ? "bg-blue-700" : "bg-blue-500"
            }`}
            onClick={() => setSelectedMenuItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {filteredRestaurants.length > 0 ? (
          <ul>
            {filteredRestaurants.map((restaurant) => (
              <li key={restaurant.name} className="border p-2 rounded mb-2">
                <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                <p>Menu: {restaurant.menu.join(", ")}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants found for {selectedMenuItem}</p>
        )}
      </div>
    </div>
  );
};

export default MenuFilterApp;
