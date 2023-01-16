import { useState, useEffect } from "react";
import axios from "axios";
import { RestaurantCard } from "./RestaurantCard";
import { SearchBar } from "./SearchBar";
import ShimmerEffect from "./ShimmerEffect";
import { Link } from "react-router-dom";

export const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    getRestaurants();
  }, []);

  console.log("render");

  const getRestaurants = async () => {
    try {
      const res = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(res?.data?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurants(res?.data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(res?.data?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      setHasError(true);
    }
  };

  if (hasError) return <h1>Failed</h1>;
  else
    return allRestaurants?.length === 0 ? (
      Array.from({ length: 6 }, (x, id) => <ShimmerEffect key={id} />)
    ) : (
      <div className="container">
        <SearchBar
          restaurants={allRestaurants}
          setRestaurants={setAllRestaurants}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <div className="cards-container">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                className="links"
                to={`/${restaurant?.data?.id}`}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })}
        </div>
      </div>
    );
};
