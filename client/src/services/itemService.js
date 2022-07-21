import axios from "axios";
import config from "../config";

// Hàm xử lý exception
const handleException = (error) => {
  throw error.response.data.message;
};

// Gọi API lấy tất cả item
export const getItemsService = async (itemType) => {
  try {
    const res = await axios.post(
      `${config.constants.API_URL}/items/pagination`,
      itemType
    );

    return res.data.data;
  } catch (error) {
    handleException();
  }
};

// Gọi API thêm item
export const insertItemService = async (item) => {
  try {
    const res = await axios.post(`${config.constants.API_URL}/items/`, item);
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    handleException(error);
  }
};

// Gọi API sửa item
export const updateItemService = async (item) => {
  try {
    var updateItem = {...item, itemId: item._id}
    const res = await axios.patch(
      `${config.constants.API_URL}/items/${item._id}`,
      updateItem
    );

    return res.data;
  } catch (error) {
    console.log(error);
    handleException(error);
  }
};

export const deleteItemService = async (itemId) => {
  try {
    const res = await axios.delete(
      `${config.constants.API_URL}/items/${itemId}`
    );

    return res.data;
  } catch (error) {
    handleException(error);
  }
};
