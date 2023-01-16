import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import ShimmerEffect from "./ShimmerEffect";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantsDetails] = useState(null);
  const [restaurantsMenu, setRestaurantsMenu] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const data = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9680035&lng=77.55520659999999&restaurantId=${id}`
    );
    // console.log(
    //   data?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
    //     ?.card?.card
    // );
    console.log(data?.data?.data?.cards[0]?.card?.card?.info);
    setRestaurantsDetails(data?.data?.data?.cards[0]?.card?.card?.info);
    setRestaurantsMenu(
      data?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };

  if (!restaurantDetails) return null;

  return (
    <div className="menu-container">
      <div className="restaurant-details" style={{ textAlign: "center" }}>
        <h1>{restaurantDetails?.name}</h1>
        <p>{`${restaurantDetails?.locality}, ${restaurantDetails?.city}`}</p>
      </div>
      {restaurantsMenu.length === 0 ? (
        <ShimmerEffect />
      ) : (
        restaurantsMenu?.map((restaurantMenu) => {
          const { ...allCardInfo } = restaurantMenu?.card?.info;

          return (
            <div className="menu-card-container" key={allCardInfo?.id}>
              <h1>{allCardInfo?.name}</h1>
              <img src={`${IMG_URL}/${allCardInfo?.imageId}`} />
              <h3>{allCardInfo?.category}</h3>
              {allCardInfo?.ratings?.aggregatedRating?.rating ? (
                <p>{`${allCardInfo?.ratings?.aggregatedRating?.rating} stars`}</p>
              ) : null}
              <h2>{allCardInfo?.price}</h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
