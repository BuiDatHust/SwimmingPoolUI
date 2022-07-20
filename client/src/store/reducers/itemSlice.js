import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../../config";
import {
  deleteItemService,
  getItemsService,
  insertItemService,
  updateItemService,
} from "../../services";

export const updateItem = createAsyncThunk(
  "item/update",
  async (item, { rejectWithValue }) => {
    try {
      await updateItemService(item);
      return item;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const insertItem = createAsyncThunk(
  "item/insert",
  async (item, { rejectWithValue }) => {
    try {
      const newItem = await insertItemService(item);
      return newItem;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteItem = createAsyncThunk("item/delete", async (itemId) => {
  await deleteItemService(itemId);
  return itemId;
});

export const getItems = createAsyncThunk("item/get", async (itemType) => {
  const items = await getItemsService(itemType);
  return items;
});

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    itemSelected: {},
    isShowItemInfo: false,
    isShowAddItem: false,
    editMode: config.editMode.ADD,
    categoryName: config.categoryName.ITEM,
    itemError: null,
  },
  reducers: {
    selectItem(state, action) {
      state.itemSelected = action.payload;
    },
    toggleItemInfo(state) {
      state.isShowItemInfo = !state.isShowItemInfo;
    },
    toggleAddItem(state) {
      state.itemError = null;
      state.isShowAddItem = !state.isShowAddItem;
    },
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
    setCategoryName(state, aciton) {
      state.categoryName = aciton.payload;
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
      state.itemError = null;
      state.isShowAddItem = false;
    },
    [updateItem.rejected]: (state, action) => {
      state.itemError = action.payload;
    },
    [insertItem.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.itemError = null;
      state.isShowAddItem = false;
    },
    [insertItem.rejected]: (state, action) => {
      state.itemError = action.payload;
    },
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

// Reducer
const itemReducer = itemSlice.reducer;

// Action
export const {
  selectItem,
  toggleItemInfo,
  toggleAddItem,
  setEditMode,
  setCategoryName,
} = itemSlice.actions;

// Selector
export const itemSelector = (state) => state.itemReducer;

export default itemReducer;
