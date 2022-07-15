import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import appReducer from "./reducers/appSlice";
import orderReducer from "./reducers/orderSlice";

// Store
const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
    orderReducer
  },
});

// Export
export default store;
