import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createOrderService,
  payOrderService,
} from "../../services/orderService";

export const createOrder = createAsyncThunk(
  "order/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await createOrderService(data);

      await payOrderService(res.data._id);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    isLoading: false,
  },
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      var indexOfItem = state.cartItems.findIndex(
        (i) =>
          i.itemId === action.payload.itemId &&
          i.startDate === action.payload.startDate
      );
      if (indexOfItem >= 0) {
        state.cartItems[indexOfItem].itemQuantity +=
          action.payload.itemQuantity;
      } else {
        state.cartItems.unshift(action.payload);
      }
      state.totalPrice +=
        action.payload.itemPrice * action.payload.itemQuantity;
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      state.totalPrice -=
        action.payload.itemPrice * action.payload.itemQuantity;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.isLoading = false;
    },
  },
});

// Reducer
const orderReducer = orderSlice.reducer;

// Action
export const { addItemToCart, removeItem, toggleLoading } = orderSlice.actions;

// Selector
export const orderSelector = (state) => state.orderReducer;

export default orderReducer;
