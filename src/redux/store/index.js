import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";

const store = configureStore({
  reducer: productSlice,
});

export default store;
