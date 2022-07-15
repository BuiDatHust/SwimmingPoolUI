import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    itemSelected: {
      name: "",
      price: 0,
      quantity: 0,
      image: "",
    },
  },
  reducers: {
    selectItem(state, action) {
      state.itemSelected = action.payload;
    },
  },
});

// Reducer
const orderReducer = orderSlice.reducer;

// Action
export const { selectItem } = orderSlice.actions;

// Selector
export const orderSelector = (state) => state.orderReducer;

export default orderReducer;
