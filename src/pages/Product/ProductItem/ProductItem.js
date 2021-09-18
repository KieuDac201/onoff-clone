import PropTypes from "prop-types";
import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import discountImg from "../../../assets/images/discount-10.png";
import formatPrice from "../../../utils/formatPrice";
import {
  DiscountImg,
  NewPrice,
  OldPrice,
  ProductImg,
  ProductItems,
  ProductName,
} from "./styled";

const ProductItem = ({ images, name, price, id }) => {
  const [img, setImg] = useState(images[1] || images[3] || images[0]);
  const handleHover = () => {
    const selectImg = images[2] || images[0] || images[3] || images[1];
    setImg(selectImg);
  };

  const handleLeave = () => {
    const selectImg = images[1] || images[0] || images[2] || images[3];
    setImg(selectImg);
  };

  return (
    <ProductItems>
      <DiscountImg src={discountImg} alt="" />
      <Link to={`/product-detail/${id}`}>
        <ProductImg
          src={img}
          alt={name}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          loading="lazy"
        />
      </Link>
      <ProductName>{name}</ProductName>
      <OldPrice>{formatPrice(price)}</OldPrice>
      <NewPrice>{formatPrice(price)}</NewPrice>
    </ProductItems>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.array,
};
