import React, { useState } from "react";
import styled from "styled-components";
import discountImg from "../../assets/images/discount-10.png";
import formatPrice from "../../utils/formatPrice";

const ProductItem = ({ images, name, price }) => {
  const [img, setImg] = useState(images[1]);
  const handleHover = () => {
    const selectImg = images[2] || images[1] || images[0] || images[3];
    setImg(selectImg);
  };

  const handleLeave = () => {
    const selectImg = images[1] || images[0] || images[2] || images[3];
    setImg(selectImg);
  };

  return (
    <ProductItems>
      <DiscountImg src={discountImg} alt="" />
      <ProductImg
        src={img}
        alt={name}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      />
      <ProductName>{name}</ProductName>
      <OldPrice>{formatPrice(price)}</OldPrice>
      <NewPrice>{formatPrice(price)}</NewPrice>
    </ProductItems>
  );
};

export default ProductItem;

const DiscountImg = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  :hover {
  }
`;
const ProductImg = styled.img`
  width: 100%;
`;
const ProductName = styled.p`
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
const OldPrice = styled.p`
  font-size: 12px;
  text-decoration: line-through;
  margin: auto 0 5px 0;
`;
const NewPrice = styled.h4`
  font-size: 14px;
  margin-bottom: 24px;
`;
