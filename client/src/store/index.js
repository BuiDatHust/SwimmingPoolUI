import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import appReducer from "./reducers/appSlice";
import orderReducer from "./reducers/orderSlice";
import itemReducer from "./reducers/itemSlice";
import ticketReducer from "./reducers/ticketSlice";

// Store
const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
    orderReducer,
    itemReducer,
    ticketReducer,
  },
});

// Export
export default store;
