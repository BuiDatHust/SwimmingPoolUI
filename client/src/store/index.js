import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";

// Store
const store = configureStore({
  reducer: {
    authReducer,
  },
});

// Export
export default store;
