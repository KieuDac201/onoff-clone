import React from "react";
import styled from "styled-components";
import { ProductSizeItem } from "../ProductSize/ProductSize";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductQuantity = ({ productQuantity, setProductQuantity }) => {
  const incrementQuantity = () => {
    if (productQuantity >= 99) return;
    setProductQuantity(productQuantity + 1);
  };
  const decrementQuantity = () => {
    if (productQuantity <= 1) return;
    setProductQuantity(productQuantity - 1);
  };
  return (
    <ProductQuantity1>
      <p>SỐ LƯỢNG:</p>
      <ProductQuantityBtns>
        <ProductQuantityBtn onClick={decrementQuantity}>
          <FiMinus />
        </ProductQuantityBtn>
        <ProductQuantityBtn>{productQuantity}</ProductQuantityBtn>
        <ProductQuantityBtn onClick={incrementQuantity}>
          <FiPlus />
        </ProductQuantityBtn>
      </ProductQuantityBtns>
    </ProductQuantity1>
  );
};

export default ProductQuantity;

const ProductQuantity1 = styled.div`
  margin-top: 30px;
  p {
    margin-bottom: 10px;
  }
`;
const ProductQuantityBtns = styled.div`
  display: flex;
  align-items: center;
`;

const ProductQuantityBtn = styled(ProductSizeItem)`
  &:nth-child(2) {
    font-weight: 600;
  }
`;
