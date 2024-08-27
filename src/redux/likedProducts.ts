import { createSlice } from "@reduxjs/toolkit";

export const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState: [] as string[],
  reducers: {
    like: (state, action) => state.concat(action.payload),
    unlike: (state, action) =>
      state.filter((productId) => productId !== action.payload),
  },
});

export const { like, unlike } = likedProductsSlice.actions;
