import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/83/45/97/834597d610554937549e1bca8830b625.jpg"
        />
        <span className="m4u-text">M4U</span>
      </div>
      <div className="nav-container">
        <div className="search">Search</div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCart = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(" , ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurants",

    info: {
      id: "165246",
      name: "Bistro At 13",
      cloudinaryImageId: "oztbaqrxjlw8xnonvshd",
      locality: "Sector 13",
      areaName: "Bhiwani Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Chinese"],
      avgRating: 4.4,
      veg: true,
      parentId: "47332",
      avgRatingString: "4.4",
      totalRatingsString: "8.1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/bistro-at-13-sector-13-bhiwani-locality-rest165246",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "167292",
      name: "Pizza Choice",
      cloudinaryImageId: "jjufgbbo77hlobrj3cd6",
      locality: "Housing Board Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "158448",
      avgRatingString: "4.1",
      totalRatingsString: "7.9K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹55",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/pizza-choice-housing-board-colony-bhiwani-locality-rest167292",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "165358",
      name: "Pizza Hub",
      cloudinaryImageId: "xstshshouyhbbnejqj3m",
      locality: "Housing Board Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Pizzas", "Pastas", "Beverages", "Continental"],
      avgRating: 4.1,
      veg: true,
      parentId: "14585",
      avgRatingString: "4.1",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹95",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/pizza-hub-housing-board-colony-bhiwani-locality-rest165358",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "714225",
      name: "Garam Masala Restaurant",
      cloudinaryImageId: "67c62ba8e806d8bb120afe24181227e2",
      locality: "Ch. Devilal Market",
      areaName: "Bhiwani",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese ",
        "Fast Food ",
        "Pizzas ",
        "Pastas ",
        "Continental ",
        "Chaat ",
        "Barbecue ",
        "South Indian ",
        "Indian ",
      ],
      avgRating: 3.7,
      veg: true,
      parentId: "20003",
      avgRatingString: "3.7",
      totalRatingsString: "47",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/garam-masala-restaurant-ch-devilal-market-bhiwani-rest714225",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "556066",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/f499f2a4-c142-4421-bc92-eafaf4fc5820_556066.JPG",
      locality: "Lal Market",
      areaName: "Dinod",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "403",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/kwality-walls-ice-cream-and-more-lal-market-dinod-rest556066",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "171641",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/205edf6b-760e-4b2a-b6f3-ff8b21b871c0_171641.JPG",
      locality: "City Centre Mall",
      areaName: "Bhiwani Locality",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-16 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/dominos-pizza-city-centre-mall-bhiwani-locality-rest171641",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "163406",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/ea76e811-f28e-4f7f-817e-a5b8941601de_163406.jpg",
      locality: "Hansi gate",
      areaName: "Bhagganpuri",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "191",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/baskin-robbins-ice-cream-desserts-hansi-gate-bhagganpuri-rest163406",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "403925",
      name: "Gianis - Ice Cream, Shakes & Sundaes",
      cloudinaryImageId: "piu31sanydukvztac8pm",
      locality: "Hansi Road",
      areaName: "Dinod",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Desserts", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "427371",
      avgRatingString: "4.3",
      totalRatingsString: "210",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/gianis-ice-cream-shakes-and-sundaes-hansi-road-dinod-rest403925",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "583224",
      name: "Big Bistro",
      cloudinaryImageId: "fvqkmxx1b3onginspgy7",
      locality: "Indira Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Chinese"],
      avgRating: 4.4,
      veg: true,
      parentId: "349092",
      avgRatingString: "4.4",
      totalRatingsString: "802",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/big-bistro-indira-colony-bhiwani-locality-rest583224",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "165252",
      name: "Rakheja Sweets",
      cloudinaryImageId: "hotzzckyeozbgwr8bhqv",
      areaName: "Bhiwani Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Snacks", "Fast Food"],
      avgRating: 4.1,
      veg: true,
      parentId: "472834",
      avgRatingString: "4.1",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/rakheja-sweets-bhiwani-locality-rest165252",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "164082",
      name: "My Shop",
      cloudinaryImageId: "evr5nqoknv6ieuorzw9y",
      locality: "Mc Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Pastas", "Beverages", "Burgers", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "5323",
      avgRatingString: "4.5",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/my-shop-mc-colony-bhiwani-locality-rest164082",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "295207",
      name: "Vatika Bar And Restaurant",
      cloudinaryImageId: "kjvcquo9msmriay44e8b",
      locality: "Housing Board Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian"],
      avgRating: 4.4,
      parentId: "221678",
      avgRatingString: "4.4",
      totalRatingsString: "318",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/vatika-bar-and-restaurant-housing-board-colony-bhiwani-locality-rest295207",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "554847",
      name: "Spice World",
      cloudinaryImageId: "yydz2zflifzlzyzgtngv",
      locality: "Circular Road",
      areaName: "Bhiwani Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "South Indian", "Italian", "Snacks"],
      avgRating: 4.4,
      veg: true,
      parentId: "333728",
      avgRatingString: "4.4",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/spice-world-circular-road-bhiwani-locality-rest554847",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "164080",
      name: "Sweet Fast Food Cafe",
      cloudinaryImageId: "wdj7j3ozes6skdoicrzg",
      locality: "Housing Board Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹200 for two",
      cuisines: ["American", "Chinese", "Italian", "South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "586877",
      avgRatingString: "4.2",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/sweet-fast-food-cafe-housing-board-colony-bhiwani-locality-rest164080",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "476842",
      name: "HealthyHolic",
      cloudinaryImageId: "dsqyxgau8clnelg9w4j3",
      locality: "Gujrani",
      areaName: "Bhiwani Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Beverages", "Continental"],
      avgRating: 4.5,
      parentId: "286296",
      avgRatingString: "4.5",
      totalRatingsString: "837",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/healthyholic-gujrani-bhiwani-locality-rest476842",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "315480",
      name: "The Pizza Pie",
      cloudinaryImageId: "agibmj9bnqcw2h3yqjio",
      locality: "Krishna Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Beverages", "Italian"],
      avgRating: 4.1,
      veg: true,
      parentId: "6224",
      avgRatingString: "4.1",
      totalRatingsString: "730",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/the-pizza-pie-krishna-colony-bhiwani-locality-rest315480",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "163390",
      name: "Radha Ki Rasoi",
      cloudinaryImageId: "ypp6djowvy5akwscr6ke",
      locality: "krishna Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "164148",
      avgRatingString: "4.3",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/radha-ki-rasoi-krishna-colony-bhiwani-locality-rest163390",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "679587",
      name: "Burger Niks",
      cloudinaryImageId: "b1d030eef349d4c44a6aacb4cd0c9ba5",
      locality: "Cid office",
      areaName: "Bhiwani Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Pizzas", "Beverages"],
      avgRating: 4.3,
      parentId: "406145",
      avgRatingString: "4.3",
      totalRatingsString: "141",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/burger-niks-cid-office-bhiwani-locality-rest679587",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "163388",
      name: "Asain Bakery & Snacks",
      cloudinaryImageId: "qrf1rhrt6wczv1xvvep1",
      locality: "Krishna Colony",
      areaName: "Bhiwani Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery"],
      avgRating: 4.3,
      parentId: "36674",
      avgRatingString: "4.3",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Akash/Listing%20badge.png",
            shortDescription: "Price Match Promise",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Akash/Listing%20badge.png",
                  shortDescription: "Price Match Promise",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/asain-bakery-and-snacks-krishna-colony-bhiwani-locality-rest163388",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "164075",
      name: "Shaam E Khaas",
      cloudinaryImageId: "uqsrdzroolrpd59sdrk0",
      locality: "Old Bus Stand Road",
      areaName: "Bhiwani Locality",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Pastas", "Continental"],
      avgRating: 4.4,
      veg: true,
      parentId: "180348",
      avgRatingString: "4.4",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1b3bdada-352c-4354-b009-efd29eb55755",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhiwani/shaam-e-khaas-old-bus-stand-road-bhiwani-locality-rest164075",
      type: "WEBLINK",
    },
  },
];
//19
const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCart resData={resList[0]} />
        <RestaurantCart resData={resList[1]} />
        <RestaurantCart resData={resList[2]} />
        <RestaurantCart resData={resList[3]} />
        <RestaurantCart resData={resList[4]} />
        <RestaurantCart resData={resList[5]} />
        <RestaurantCart resData={resList[6]} />
        <RestaurantCart resData={resList[7]} />
        <RestaurantCart resData={resList[8]} />
        <RestaurantCart resData={resList[9]} />
        <RestaurantCart resData={resList[10]} />
        <RestaurantCart resData={resList[11]} />
        <RestaurantCart resData={resList[12]} />
        <RestaurantCart resData={resList[13]} />
        <RestaurantCart resData={resList[14]} />
        <RestaurantCart resData={resList[15]} />
        <RestaurantCart resData={resList[16]} />
        <RestaurantCart resData={resList[17]} />
        <RestaurantCart resData={resList[18]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
