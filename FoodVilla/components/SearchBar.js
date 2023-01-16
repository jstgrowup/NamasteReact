import { useState } from "react";

export const SearchBar = ({
  restaurants,
  setRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (searchText, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <div className="search-section">
      <input
        placeholder="Type dishes to search"
        value={searchText}
        onChange={(e) => handleInput(e)}
      />
      <button
        onClick={() => handleSearch(searchText, restaurants)}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
};
