import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  allProduct: [],
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    let tempArr = [];
    querySnapshot.forEach((doc) => {
      tempArr.push({ id: doc.id, ...doc.data() });
    });
    return tempArr;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      console.log("loading...");
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});

export default productSlice.reducer;
