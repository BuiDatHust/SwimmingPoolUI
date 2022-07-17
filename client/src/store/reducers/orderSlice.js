import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.cart.unshift(action.payload);
    },
  },
});

// Reducer
const orderReducer = orderSlice.reducer;

// Action
export const { addItemToCart } = orderSlice.actions;

// Selector
export const orderSelector = (state) => state.orderReducer;

export default orderReducer;
