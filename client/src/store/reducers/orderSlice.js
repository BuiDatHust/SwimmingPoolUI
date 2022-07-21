import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrderService } from "../../services/orderService";

export const createOrder = createAsyncThunk(
  'order/create',
  async (data, { rejectWithValue}) => {
    try {
      const res = await createOrderService(data);
      console.log(data);
      return res.data.order;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.unshift(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      console.log(state);
      const index = state.cartItems.indexOf(action.payload);
      state.cartItems.splice(index,index+1);
      state.totalPrice -= action.payload.price;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
  }
});

// Reducer
const orderReducer = orderSlice.reducer;

// Action
export const { addItemToCart,removeItem } = orderSlice.actions;

// Selector
export const orderSelector = (state) => state.orderReducer;

export default orderReducer;
