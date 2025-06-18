import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import CategoryCard from "./CategoryCard";
import Chatbot from "./Chatbot";
import { Link } from "react-router";
import MenuFilterApp from "./MenuFilterApp";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listfRestaurants, setlistofRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Categories, setCategories] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setShowScrollButton(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout;
    if (showScrollButton) {
      timeout = setTimeout(() => {
        setIsFaded(true);
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [showScrollButton]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7955061&lng=76.1282996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurantData = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setlistofRestaurants(restaurantData || []);
      setFilteredRestaurant(restaurantData || []);

      const categoryDataCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.imageGridCards?.info
      );

      const categoryData =
        categoryDataCard?.card?.card?.imageGridCards?.info.map((category) => ({
          id: category?.id,
          name: category?.action?.text,
          imageUrl: category?.imageId,
          link: category?.action?.link,
        })) || [];

      setCategories(categoryData);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  const handleCategoryClick = async (categoryName) => {
    console.log(`${categoryName}`);
    try {
      var cleanCategory = categoryName
        .replace(/ies$/, "y")
        .replace(/[\s.,;!?s]+$/, "");

      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7974684&lng=76.1322058&str=${cleanCategory}&trackingId=&submitAction=ENTER&queryUniqueId=`
      );
      const json = await response.json();

      const restaurants =
        json?.data?.cards
          ?.find((card) => card?.groupedCard)
          ?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map((card) => ({
            info: card.card.card.info,
            promoted: card.card.card.info?.promoted || false,
          })) || [];

      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Error fetching category-based restaurants:", err);
    }
  };

  if (onlineStatus === false) {
    return (
      <h1 className="os">Looks like you are offline. Check your internet.</h1>
    );
  }

  return listfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Type to search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={async () => {
              const filteredByName = listfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              if (filteredByName.length > 0) {
                setFilteredRestaurant(filteredByName);
              } else {
                await handleCategoryClick(searchText);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = FilteredRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button className="nav-button">
          <li id="grocery_button">
            <Link to="/grocery">Grocery</Link>
          </li>
        </button>
      </div>

      {Categories.length > 0 && (
        <div className="categories-container">
          <h2 className="categories-title">What's on Your Mind?</h2>
          <div className="categories">
            {Categories.map((category, index) => (
              <CategoryCard
                key={index}
                category={category}
                onClick={() => handleCategoryClick(category.name)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="res-container">
        {FilteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>

      {/* No results message */}
      {FilteredRestaurant.length === 0 && (
        <h2 style={{ textAlign: "center", marginTop: "20px", color: "#999" }}>
          No matching restaurants found.
        </h2>
      )}

      {/* Reset Button */}
      <button
        onClick={() => setFilteredRestaurant(listfRestaurants)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          color: "white",
          background:
            "linear-gradient(90deg, #41506d 0%, #5a7ded 100%, #9877e3 100%)",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        title="Reset"
      >
        ↺
      </button>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "fixed",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: hovered ? "#222" : "#000",
            color: "white",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1000,
            opacity: hovered || !isFaded ? 1 : 0.2,
            transition: "all 0.3s ease",
          }}
          title="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Body;
