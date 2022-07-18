import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    tickets: [
      {
        ticketType: "date",
        price: 50000,
        image: "https://static.toiimg.com/photo/77745542.cms?imgsize=432028",
      },
      {
        ticketType: "month",
        price: 1000000,
        image: "https://static.toiimg.com/photo/77745542.cms?imgsize=432028",
      },
    ],
    ticketSelected: {
      ticketType: "",
      price: 0,
      image: "",
    },
    isShowTicketInfo: false,
  },
  reducers: {
    selectTicket(state, action) {
      state.ticketSelected = action.payload;
    },
    toggleTicketInfo(state) {
      state.isShowTicketInfo = !state.isShowTicketInfo;
    },
  },
});

// Reducer
const ticketReducer = ticketSlice.reducer;

// Action
export const { selectTicket, toggleTicketInfo } = ticketSlice.actions;

// Selector
export const ticketSelector = (state) => state.ticketReducer;

export default ticketReducer;
