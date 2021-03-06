import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCart } from "../../features/cart/cartSlice";
import formatPrice from "../../utils/formatPrice";
import CartItem from "./CartItem/CartItem";
import {
  CartBtnClose,
  CartButton,
  CartContainer,
  CartList,
  CartTitle,
  CartTotal,
  CartTotalPrice,
  CartTotalTitle,
} from "./styled";

const Cart = ({ setIsShowCart, isShowCart }) => {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const cart = useSelector(getAllCart);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    setTotalPriceCart(totalPrice);
  }, [cart]);
  return (
    <CartContainer isShowCart={isShowCart}>
      <CartTitle>
        GIỎ HÀNG CỦA BẠN
        <CartBtnClose onClick={() => setIsShowCart(false)}>
          <GrFormClose />
        </CartBtnClose>
      </CartTitle>
      <CartList>
        {cart?.length ? (
          cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                img={item.images[0]}
                id={item.id}
              />
            );
          })
        ) : (
          <p>Giỏ hàng của bạn trống </p>
        )}
      </CartList>
      <CartTotal>
        <CartTotalTitle>Tổng tiền hàng</CartTotalTitle>
        <CartTotalPrice>{formatPrice(totalPriceCart)}</CartTotalPrice>
      </CartTotal>
      <Link to="/checkout" onClick={() => setIsShowCart(false)}>
        <CartButton>Đặt hàng</CartButton>
      </Link>
    </CartContainer>
  );
};

export default Cart;
