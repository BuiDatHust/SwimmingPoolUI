import axios from "axios";
import config from "../config";

// Hàm xử lý exception
const handleException = (error) => {
  // Lỗi validate
  if (error.response.data.errors) {
    throw error.response.data.errors[0].msg;
  }
  // Lỗi khác
  throw error.response.data.error.message;
};

// Gọi API đăng nhập
export const loginService = async (formData) => {
  try {
    const res = await axios.post(
      `${config.constants.API_URL}/auth/login`,
      formData
    );
    return res.data.data;
  } catch (error) {
    handleException(error);
  }
};

// Gọi API lấy user hiện tại
export const getUserService = async () => {
  try {
    const res = await axios.get(`${config.constants.API_URL}/auth`);
    return res.data.data;
  } catch (error) {
    handleException(error);
  }
};
