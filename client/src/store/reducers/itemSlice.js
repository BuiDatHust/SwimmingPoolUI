import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [
      {
        name: "Quần bơi",
        price: 100000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/78d4d34e2c517ca33eef78858dfaeae8",
      },
      {
        name: "Kính bơi",
        price: 60000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/83d69195c9020bb4b328a44600ec0396",
      },
      {
        name: "Phao bơi",
        price: 80000,
        quantity: 200,
        image:
          "https://caygiongbo.com/datafiles/3/2019-04-27/46931585-phao-boi-hinh-qua-bo-thao-duoc.jpg",
      },
      {
        name: "Áo phao",
        price: 60000,
        quantity: 200,
        image: "https://cf.shopee.vn/file/450fecd2013212d21ba72ce5513c3923",
      },
      {
        name: "Mũ bơi",
        price: 100000,
        quantity: 200,
        image:
          "https://sportonline.com.vn/wp-content/uploads/2019/04/mu-boi-bit-tai-whale.jpg",
      },
      {
        name: "Đồ bơi nữ",
        price: 200000,
        quantity: 200,
        image:
          "https://vn-live-01.slatic.net/shop/9fafae24ff1056d9ba1db64f1f3925d5.jpeg",
      },
    ],
    itemSelected: {
      name: "",
      price: 0,
      quantity: 0,
      image: "",
    },
    isShowItemInfo: false,
  },
  reducers: {
    selectItem(state, action) {
      state.itemSelected = action.payload;
    },
    toggleItemInfo(state, action) {
      state.isShowItemInfo = !state.isShowItemInfo;
    },
  },
});

// Reducer
const itemReducer = itemSlice.reducer;

// Action
export const { selectItem, toggleItemInfo } = itemSlice.actions;

// Selector
export const itemSelector = (state) => state.itemReducer;

export default itemReducer;
