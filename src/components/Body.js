import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listfRestaurants, setlistofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("Fetching data..."); // Debugging log
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.79162359999999&lng=76.13203639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("API Response:", json.data.cards); // Debugging the structure

      // Find the correct array that contains restaurant information
      const restaurantData = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // Set data if found, otherwise keep an empty array
      setlistofRestaurants(restaurantData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //conditional rendering////////////////////////
  // if (listfRestaurants.length === 0) {
  //   return <Shimmer />; // Show shimmer instead of an error
  // }
  return listfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
