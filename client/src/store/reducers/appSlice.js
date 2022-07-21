import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isShowOrderInfo: false,
    isShowMenu: false,
  },
  reducers: {
    toggleOrderInfo: (state) => {
      state.isShowOrderInfo = !state.isShowOrderInfo;
    },
    toggleMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },
  },
});

// Reducer
const appReducer = appSlice.reducer;

// Action
export const { toggleOrderInfo, toggleMenu } = appSlice.actions;

// Selector
export const appSelector = (state) => state.appReducer;

export default appReducer;
