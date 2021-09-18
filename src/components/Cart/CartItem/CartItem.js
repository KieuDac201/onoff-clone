import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreProductQuan,
  delProduct,
  increProductQuan,
} from "../../../features/cart/cartSlice";
import formatPrice from "../../../utils/formatPrice";
import {
  CartBtnDel,
  CartContent,
  CartImg,
  CartItem1,
  CartItemName,
  CartItemNewPrice,
  CartItemOldPrice,
  CartItemQuantity,
  CartQuantity,
  CartQuantityBtn,
  CartQuantityBtns,
} from "../styled";

const CartItem = ({ img, name, quantity, price, id }) => {
  const dispatch = useDispatch();
  const delFromCart = (id) => {
    dispatch(delProduct(id));
  };

  const incrementProduct = (id) => {
    dispatch(increProductQuan(id));
  };

  const decrementProduct = (id) => {
    dispatch(decreProductQuan(id));
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
