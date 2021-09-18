import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  products: [],
  loading: true,
};

export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    let allProduct = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allProduct.push({ id: doc.id, ...doc.data() });
    });
    return allProduct;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchAllProduct.pending]: () => {
      console.log("pending");
    },
    [fetchAllProduct.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    },
    [fetchAllProduct.rejected]: (state) => {
      console.log("rejected");
      state.loading = false;
    },
  },
});

export const getAllProduct = (state) => state.allProducts.products;
export const getLoadingState = (state) => state.allProducts.loading;
export default productSlice.reducer;
