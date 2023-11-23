import { IMG_URL } from "../constants";

export const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  console.log(`${IMG_URL}/${cloudinaryImageId}`);
  return (
    <div key={id} className="card">
      <img src={`${IMG_URL}/${cloudinaryImageId}`} alt="sds" />
      <div className="name-rating">
        <h2>{name}</h2>
        <h4>{avgRating}</h4>
      </div>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};
