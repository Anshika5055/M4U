// import { useState, useEffect } from "react";
// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(Menu_API + resId);
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   return resInfo;
// };
// export default useRestaurantMenu;

import { useState, useEffect } from "react";
import { Menu_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!resId) {
      console.error("❌ Error: Missing Restaurant ID!");
      return;
    }

    const fetchData = async () => {
      try {
        console.log("✅ Fetching menu for Restaurant ID:", resId);

        const response = await fetch(Menu_API + resId);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const json = await response.json();
        console.log("✅ Full API Response:", json);

        setResInfo(json.data);

        // ✅ Dynamic Category Extraction Fix
        const cards = json?.data?.cards || [];
        let menuCategories = [];

        for (const card of cards) {
          const groupedCard = card?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          if (groupedCard) {
            menuCategories = groupedCard.filter(
              (category) =>
                category?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
          }
        }

        console.log("📌 Extracted Categories:", menuCategories);
        setCategories(menuCategories || []);
      } catch (error) {
        console.error("❌ Fetch Error:", error);
      }
    };

    fetchData();
  }, [resId]);

  return { resInfo, categories };
};

export default useRestaurantMenu;
