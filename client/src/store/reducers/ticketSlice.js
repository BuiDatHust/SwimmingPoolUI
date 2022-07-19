import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../../config";
import { v4 as uuidv4 } from "uuid";

export const insertTicket = createAsyncThunk("ticket/insert", (ticket) => {
  console.log(ticket);
  const newTicket = {
    ...ticket,
    _id: uuidv4(),
    image: "https://static.toiimg.com/photo/77745542.cms?imgsize=432028",
  };
  return newTicket;
});

export const updateTicket = createAsyncThunk("ticket/update", (ticket) => {
  return ticket;
});

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    tickets: [
      {
        _id: 1,
        ticketType: "date",
        price: 50000,
        image: "https://static.toiimg.com/photo/77745542.cms?imgsize=432028",
      },
      {
        _id: 2,
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
    isShowAddTicket: false,
    editMode: config.editMode.ADD,
  },
  reducers: {
    selectTicket(state, action) {
      state.ticketSelected = action.payload;
    },
    toggleTicketInfo(state) {
      state.isShowTicketInfo = !state.isShowTicketInfo;
    },
    toggleAddTicket(state) {
      state.isShowAddTicket = !state.isShowAddTicket;
    },
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
  },
  extraReducers: {
    [updateTicket.fulfilled]: (state, action) => {
      state.tickets = state.tickets.map((ticket) => {
        if (ticket._id === action.payload._id) {
          return action.payload;
        }
        return ticket;
      });
    },
    [insertTicket.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.tickets.unshift(action.payload);
    },
  },
});

// Reducer
const ticketReducer = ticketSlice.reducer;

// Action
export const { selectTicket, toggleTicketInfo, toggleAddTicket, setEditMode } =
  ticketSlice.actions;

// Selector
export const ticketSelector = (state) => state.ticketReducer;

export default ticketReducer;
