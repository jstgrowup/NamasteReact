import React from "react";
import { useParams } from "react-router-dom";
function RestaurantDetail() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default RestaurantDetail;
