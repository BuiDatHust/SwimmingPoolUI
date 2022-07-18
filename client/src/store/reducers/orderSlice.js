import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.unshift(action.payload);
      state.totalPrice += action.payload.price;
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
