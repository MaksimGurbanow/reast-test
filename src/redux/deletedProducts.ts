import { createSlice } from "@reduxjs/toolkit";

export const deletedItemsSlice = createSlice({
  name: "deletedItems",
  initialState: [] as string[],
  reducers: {
    addToBin: (state, action: { payload: string }) => {
      return state.concat(action.payload);
    },
  },
});

export const { addToBin } = deletedItemsSlice.actions;
