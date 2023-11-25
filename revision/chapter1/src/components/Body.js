import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
let restaurantsList = [];
const filterData = () => {};
const Body = () => {
  //   const searchText = "kfc";
  //   if you need to work with a local varialble in react we need to use state
  const [searchText, setSearchText] = useState();
  console.log("searchText:", searchText);
  //   to cerate state variables
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {}, []);
  return (
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
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
          className=""
        >
          Seacrh {searchText}
        </button>
      </div>
      {restaurantsList.map((restaurants) => {
        return (
          <RestaurantCard {...restaurants?.data} key={restaurants?.data?.id} />
        );
      })}
    </div>
  );
};
export default Body;
