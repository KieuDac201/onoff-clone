import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/AppProvider";
import OrderProduct from "../OrderProduct/OrderProduct";

const OrderInfo = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <OrderProducts>
        {cart &&
          cart.map((item) => (
            <OrderProduct
              key={item.id}
              img={item.images[0]}
              price={item.price}
              quantity={item.quantity}
              price={item.price}
              name={item.name}
            />
          ))}
      </OrderProducts>
    </>
  );
};

export default OrderInfo;

const OrderProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 80vh;
  overflow-y: scroll;
`;
