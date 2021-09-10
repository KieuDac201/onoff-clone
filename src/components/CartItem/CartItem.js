import React, { useContext } from "react";
import {
  CartBtnDel,
  CartContent,
  CartImg,
  CartItemName,
  CartItemNewPrice,
  CartItemOldPrice,
  CartItemQuantity,
  CartQuantity,
  CartQuantityBtn,
  CartQuantityBtns,
  CartItem1,
} from "../Cart/styled";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { AppContext } from "../../App";
import formatPrice from "../../utils/formatPrice";

const CartItem = ({ img, name, quantity, price, id }) => {
  const { cart, setCart } = useContext(AppContext);
  const delFromCart = (id) => {
    const arrDeled = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(arrDeled));
    setCart(arrDeled);
  };
  const incrementProduct = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  const decrementProduct = (id) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  return (
    <CartItem1>
      <CartImg src={img} alt={name} />
      <CartContent>
        <CartItemName>{name}</CartItemName>
        <CartItemNewPrice>{formatPrice(price)}</CartItemNewPrice>
        <CartItemOldPrice>{formatPrice(price)}</CartItemOldPrice>
        <CartItemQuantity>
          <p>SỐ LƯỢNG</p>
          <CartQuantity>
            <CartQuantityBtns>
              <CartQuantityBtn onClick={() => decrementProduct(id)}>
                <BiMinus />
              </CartQuantityBtn>
              <CartQuantityBtn>{quantity}</CartQuantityBtn>
              <CartQuantityBtn onClick={() => incrementProduct(id)}>
                <BiPlus />
              </CartQuantityBtn>
            </CartQuantityBtns>
            <CartBtnDel onClick={() => delFromCart(id)}>
              <FaTrashAlt />
            </CartBtnDel>
          </CartQuantity>
        </CartItemQuantity>
      </CartContent>
    </CartItem1>
  );
};

export default CartItem;
