import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";

const ShimmerEffect = () => {
  return (
    <ShimmerSimpleGallery
      className="custom-shimmer-styles"
      imageHeight={300}
      col={2}
      caption
    />
  );
};

export default ShimmerEffect;
