import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RestaurantDetail() {
  
  const { id } = useParams();
  console.log(useState());
  return <div>{id}</div>;
}

export default RestaurantDetail;
