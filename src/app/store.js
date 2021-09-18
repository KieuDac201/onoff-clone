import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    allProducts: productSlice,
    cart: cartSlice,
  },
});

export default store;
