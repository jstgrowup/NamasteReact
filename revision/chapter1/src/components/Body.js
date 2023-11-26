import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
let restaurantsList = [];
const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((item) => item?.info?.name?.includes(searchText));
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  //   const searchText = "kfc";
  //   if you need to work with a local varialble in react we need to use state
  const [searchText, setSearchText] = useState();

  //   to cerate state variables
  const [restaurants, setRestaurants] = useState([]);

  async function getRestaurants() {
    try {
      console.log("here");
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.3408905&lng=92.70335750000001&is-seo-homepage-enabled=true"
      );
      let maindata = await data.json();
      let resData =
        maindata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setAllRestaurants(resData);
      setRestaurants(resData);
    } catch (error) {
      console.log("error:", error);
    }
  }
  useEffect(() => {
    getRestaurants();
  }, []);
  // conditional rendering
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="search-input"
          value={searchText}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurants(data);
          }}
          className=""
        >
          Seacrh {searchText}
        </button>
      </div>
      {restaurants?.map((restaurants) => {
        console.log("restaurants:", restaurants);
        return (
          <RestaurantCard {...restaurants?.info} key={restaurants?.info?.id} />
        );
      })}
    </div>
  );
};
export default Body;
