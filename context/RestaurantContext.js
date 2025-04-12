import { createContext, useState } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  return (
    <RestaurantContext.Provider value={{ restaurantData, setRestaurantData }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantData = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurantData must be used within a RestaurantProvider"
    );
  }
  return context;
};
