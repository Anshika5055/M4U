// import React from "react";
// import "../../menu.css";
// import Shimmer from "./Shimmer";
// import { imageUrl } from "../utils/constants";
// import CollapsibleSection from "./CollapsibleSection";
// import { useParams } from "react-router";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

// const RestaurantMenu = () => {
// const [resInfo, setResInfo] = useState(null);
// const [categories, setCategories] = useState([]);
// const { resId } = useParams();
// const resInfo = useRestaurantMenu(resId);

// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   try {
//     const response = await fetch(Menu_API + resId);
//     const json = await response.json();
//     setResInfo(json.data);
//     console.log("Fetched Data:", json.data);

//     // Extract menu categories
//     const menuCategories =
//       json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//         (category) =>
//           category?.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//       );

//     setCategories(menuCategories);
//   } catch (error) {
//     console.error("Error fetching menu:", error);
//   }
// };

//   if (resInfo === null) return <Shimmer />;

//   const {
//     name,
//     cuisines,
//     costForTwoMessage,
//     availability,
//     areaName,
//     avgRating,
//   } = resInfo?.cards?.[2]?.card?.card?.info || {};

//   const backupImageUrl = "https://i.ibb.co/jF03xY4/no-restraunt.png"; // Backup image

//   return (
//     <div className="menu">
//       <h1 className="res-name">{name}</h1>
//       <div className=" menu-header">
//         <p>📍Area Name: {areaName}</p>
//         <p className="rating"> ⭐️Rating: {avgRating} </p>
//         <p>🍜Cuisines: {cuisines?.join(", ")}</p>
//         <p>💸costForTwo:{costForTwoMessage}</p>
//       </div>
//       <h2>Menu</h2>
//       {categories.map((category, index) => (
//         <CollapsibleSection key={index} title={category.card.card.title}>
//           <div key={index} className="category">

//             <ul className="list">
//               {category.card.card.itemCards?.map((item, idx) => {
//                 const mainImageUrl = imageUrl + item.card.info.imageId;

//                 return (
//                   <li key={idx} className="menu-item">
//                     <div className="menu-items">
//                       <strong>{item.card.info.name}</strong>
//                       <div className="price">
//                         ₹
//                         {item.card.info.price / 100 ||
//                           item.card.info.defaultPrice / 100}
//                       </div>
//                     </div>

//                     <img
//                       src={mainImageUrl}
//                       alt="Food item"
//                       className="menu-image"
//                       onError={(e) => {
//                         console.log("Image failed to load:", mainImageUrl);
//                         e.target.src = backupImageUrl;
//                       }}
//                     />
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </CollapsibleSection>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
import React from "react";
import "../../menu.css";
import Shimmer from "./Shimmer";
import { imageUrl } from "../utils/constants";
import CollapsibleSection from "./CollapsibleSection";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, categories } = useRestaurantMenu(resId); // ✅ Fix: Get `categories`

  if (!resInfo) return <Shimmer />; // ✅ Fix: `null` check

  const {
    name,
    cuisines,
    costForTwoMessage,
    availability,
    areaName,
    avgRating,
  } = resInfo?.cards?.[2]?.card?.card?.info || {}; // ✅ Fix: Safe optional chaining

  const backupImageUrl = "https://i.ibb.co/jF03xY4/no-restraunt.png"; // ✅ Fix: Backup image

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
          <CollapsibleSection key={index} title={category.card.card.title}>
            <ul className="list">
              {category.card.card.itemCards?.map((item, idx) => {
                const mainImageUrl = imageUrl + item.card.info.imageId;

                return (
                  <li key={idx} className="menu-item">
                    <div className="menu-items">
                      <strong>{item.card.info.name}</strong>
                      <div className="price">
                        ₹
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </div>
                    </div>

                    {/* ✅ Fix: Fallback Image Handling */}
                    <img
                      src={mainImageUrl}
                      alt="Food item"
                      className="menu-image"
                      onError={(e) => {
                        console.warn("Image failed to load:", mainImageUrl);
                        e.target.src = backupImageUrl;
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </CollapsibleSection>
        ))
      ) : (
        <p>📌 No menu available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
