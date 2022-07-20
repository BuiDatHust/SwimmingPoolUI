import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import appReducer from "./reducers/appSlice";
import orderReducer from "./reducers/orderSlice";
import itemReducer from "./reducers/itemSlice";

// Store
const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
    orderReducer,
    itemReducer,
  },
});

// Export
export default store;
