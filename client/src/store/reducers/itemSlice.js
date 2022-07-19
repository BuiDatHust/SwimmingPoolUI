import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../../config";
import { v4 as uuidv4 } from "uuid";

export const updateItem = createAsyncThunk("item/update", (item) => {
  return item;
});

export const insertItem = createAsyncThunk("item/insert", (item) => {
  const newItem = { ...item, _id: uuidv4() };
  return newItem;
});

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [
      {
        _id: 1,
        name: "Quần bơi",
        price: 100000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/78d4d34e2c517ca33eef78858dfaeae8",
      },
      {
        _id: 2,
        name: "Kính bơi",
        price: 60000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/83d69195c9020bb4b328a44600ec0396",
      },
      {
        _id: 3,
        name: "Phao bơi",
        price: 80000,
        quantity: 200,
        image:
          "http://intexvietnam.vn/uploads/20052020/intex-58228-phao-boi-tron-gau-pooh-cho-be-2-1.jpg",
      },
      {
        _id: 4,
        name: "Áo phao",
        price: 60000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/450fecd2013212d21ba72ce5513c3923",
      },
      {
        _id: 5,
        name: "Mũ bơi",
        price: 100000,
        quantity: 200,
        image:
          "https://sportonline.com.vn/wp-content/uploads/2019/04/mu-boi-bit-tai-whale.jpg",
      },
      {
        _id: 6,
        name: "Đồ bơi nữ",
        price: 200000,
        quantity: 200,
        image:
          "https://vn-live-01.slatic.net/shop/9fafae24ff1056d9ba1db64f1f3925d5.jpeg",
      },
    ],
    itemSelected: {
      _id: null,
      name: "",
      price: 0,
      quantity: 0,
      image: "",
    },
    isShowItemInfo: false,
    isShowAddItem: false,
    editMode: config.editMode.ADD,
  },
  reducers: {
    selectItem(state, action) {
      state.itemSelected = action.payload;
    },
    toggleItemInfo(state) {
      state.isShowItemInfo = !state.isShowItemInfo;
    },
    toggleAddItem(state) {
      state.isShowAddItem = !state.isShowAddItem;
    },
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
  },
  extraReducers: {
    [updateItem.fulfilled]: (state, action) => {
      state.items = state.items.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
    },
    [insertItem.fulfilled]: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

// Reducer
const itemReducer = itemSlice.reducer;

// Action
export const { selectItem, toggleItemInfo, toggleAddItem, setEditMode } =
  itemSlice.actions;

// Selector
export const itemSelector = (state) => state.itemReducer;

export default itemReducer;
