import React, { useEffect } from "react";
import Container from "../../components/Container";
import styled from "styled-components";
import OrderInfo from "./OrderInfo/OrderInfo";
import OrderAddress from "./OrderAddress/OrderAddress";
import OrderMethod from "./OrderMethod/OrderMethod";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkOut = () => {};
  return (
    <Wrapper>
      <Container>
        <CheckoutTitle>ĐẶT HÀNG VÀ THANH TOÁN</CheckoutTitle>
        <CheckoutMain>
          <OrderCol>
            <OrderTitle>THÔNG TIN ĐƠN HÀNG</OrderTitle>
            <OrderInfo />
          </OrderCol>
          <OrderCol>
            <OrderTitle>ĐỊA CHỈ NHẬN HÀNG</OrderTitle>
            <OrderAddress />
          </OrderCol>
          <OrderCol>
            <OrderTitle> THANH TOÁN</OrderTitle>
            <OrderMethod />
          </OrderCol>
        </CheckoutMain>
      </Container>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  padding: 120px 0 80px 0;
`;
const CheckoutTitle = styled.h3`
  text-align: center;
  font-size: 24px;
`;
const CheckoutMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 40px;
  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const OrderCol = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  @media (max-width: 1120px) {
    &:last-child {
      grid-column: 2 / 3;
    }
  }
  @media (max-width: 820px) {
    &:last-child {
      grid-column: auto;
    }
  }
`;
const OrderTitle = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
