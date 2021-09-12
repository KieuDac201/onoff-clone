import React from "react";
import styled from "styled-components";
import formatPrice from "../../../utils/formatPrice";

const OrderProduct = ({ img, name, price, quantity }) => {
  return (
    <OrderProduct1>
      <OrderProductImg src={img} alt="" />
      <OrderProductContent>
        <OrderProductName>{name}</OrderProductName>
        <OrderProductPrice>{formatPrice(price)}</OrderProductPrice>
        <OrderProductQuantity>Số lượng: {quantity}</OrderProductQuantity>
      </OrderProductContent>
    </OrderProduct1>
  );
};

export default OrderProduct;

export const OrderProduct1 = styled.div`
  display: flex;
  align-items: center;
`;
export const OrderProductImg = styled.img`
  max-width: 100px;
`;
export const OrderProductContent = styled.div`
  padding: 10px;
`;
export const OrderProductName = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;
export const OrderProductPrice = styled(OrderProductName)``;
export const OrderProductQuantity = styled(OrderProductName)``;
