import React from "react";
import { ProductImg } from "../styled";
import ImageGallery from "react-image-gallery";

const ProductImageGallery = ({ images }) => {
  return (
    <ProductImg>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
      />
    </ProductImg>
  );
};

export default ProductImageGallery;
