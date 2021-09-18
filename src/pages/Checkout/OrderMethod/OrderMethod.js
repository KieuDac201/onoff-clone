import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/AppProvider";
import { clearCart, getAllCart } from "../../../features/cart/cartSlice";
import formatPrice from "../../../utils/formatPrice";
import showToast from "../../../utils/showToast";

const OrderMethod = () => {
  const cart = useSelector(getAllCart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(15000);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    if (!total) {
      setDeliveryCharge(0);
    }
    setTotalPrice(total);
  }, [cart]);

  const handleCheckOut = () => {
    dispatch(clearCart());
    localStorage.removeItem("cart");
    showToast("thanh toán thành công", "success");
  };

  return (
    <Wrapper>
      <OrderTop>
        <OrderTotalPrice>
          <span>Tổng tiền hàng</span>
          <p>{formatPrice(totalPrice)}</p>
        </OrderTotalPrice>
        <OrderDeliverPrice>
          <span>Phí vận chuyển</span>
          <p>{formatPrice(deliveryCharge)}</p>
        </OrderDeliverPrice>
        <OrderLastPrice>
          <span>Thành tiền sau chiết khấu</span>
          <p>{formatPrice(totalPrice + deliveryCharge)}</p>
        </OrderLastPrice>
      </OrderTop>
      <OrderButton onClick={handleCheckOut}>Thanh toán</OrderButton>
    </Wrapper>
  );
};

export default OrderMethod;

const Wrapper = styled.div`
  padding: 20px 0;
`;
const OrderTop = styled.div`
  background: #595959;
  color: #fff;
  font-size: 13px;
  margin-bottom: 12px;
`;
const OrderTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  p {
    color: #fff;
  }
`;
const OrderDeliverPrice = styled(OrderTotalPrice)`
  border-bottom: 1px solid #fff;
`;
const OrderLastPrice = styled(OrderTotalPrice)`
  p {
    font-weight: 600;
  }
`;
const OrderButton = styled.button`
  padding: 10px 25px;
  width: 100%;
  background: #000;
  color: #fff;
  font-weight: 600;
  &:hover {
    background: #595959;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;
