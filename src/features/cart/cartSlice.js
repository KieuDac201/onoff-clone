import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state) => {
      state.cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    },
    addToCart: (state, { payload }) => {
      const arr = state.cart.some((item) => item.id === payload.product.id);
      if (arr) {
        const arrSelect = state.cart.map((item) =>
          item.id === payload.product.id
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item
        );
        state.cart = arrSelect;
        localStorage.setItem("cart", JSON.stringify(arrSelect));
      } else {
        let addItem = [
          ...state.cart,
          { ...payload.product, quantity: payload.quantity },
        ];
        state.cart = addItem;
        localStorage.setItem("cart", JSON.stringify(addItem));
      }
    },

    delProduct: (state, { payload }) => {
      const arrDeled = state.cart.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(arrDeled));
      state.cart = arrDeled;
    },

    increProductQuan: (state, { payload }) => {
      const newCart = state.cart.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = newCart;
    },

    decreProductQuan: (state, { payload }) => {
      const newCart = state.cart.map((item) =>
        item.id === payload
          ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = newCart;
    },
  },
});

export const {
  addToCart,
  delProduct,
  increProductQuan,
  decreProductQuan,
  setCart,
} = cartSlice.actions;
export const getAllCart = (state) => state.cart.cart;
export default cartSlice.reducer;
