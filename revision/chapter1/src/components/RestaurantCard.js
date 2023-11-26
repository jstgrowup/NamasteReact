import { IMAGE_CDN_CLOUDINARY } from "../config/config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div>
      <img src={`${IMAGE_CDN_CLOUDINARY}/${cloudinaryImageId}`} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
export default RestaurantCard;
