import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import {
  insertItem,
  itemSelector,
  toggleAddItem,
  updateItem,
} from "../../store/reducers/itemSlice";

const AddItem = () => {
  const [item, setItem] = useState({});

  const { itemSelected, editMode } = useSelector(itemSelector);

  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(toggleAddItem());
  };

  const handleSaveItem = () => {
    if (editMode === config.editMode.ADD) {
      console.log("Add item");
      dispatch(insertItem(item));
      dispatch(toggleAddItem());
    } else if (editMode === config.editMode.EDIT) {
      console.log("Edit item");
      dispatch(updateItem(item));
      dispatch(toggleAddItem());
    }
  };

  useEffect(() => {
    setItem(itemSelected);
  }, [itemSelected]);

  return (
    <div className="add-item-bg">
      <div className="add-item-wrapper">
        <div className="add-item-header">
          <h3>Thông tin sản phẩm</h3>
          <AiOutlineClose
            className="close-button"
            title="Đóng"
            onClick={handleClosePopup}
          />
        </div>
        <div className="add-item-body">
          <div className="input-group">
            <label className="input-label">Tên sản phẩm</label>
            <input
              className="input-text"
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              autoComplete="off"
              value={item.name || ""}
              onChange={(event) =>
                setItem({
                  ...item,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label className="input-label">Hình ảnh sản phẩm</label>
            <input
              className="input-text"
              type="text"
              name="image"
              placeholder="Link ảnh sản phẩm"
              autoComplete="off"
              value={item.image || ""}
              onChange={(event) =>
                setItem({
                  ...item,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label className="input-label">Giá sản phẩm</label>
            <input
              className="input-text"
              type="text"
              name="price"
              placeholder="Giá sản phẩm"
              autoComplete="off"
              value={item.price || ""}
              onChange={(event) =>
                setItem({
                  ...item,
                  [event.currentTarget.name]: parseInt(
                    event.currentTarget.value
                  ),
                })
              }
            />
          </div>
          <div className="input-group">
            <label className="input-label">Số lượng còn lại</label>
            <input
              className="input-text"
              type="text"
              name="quantity"
              placeholder="Số lượng còn lại"
              autoComplete="off"
              value={item.quantity || ""}
              onChange={(event) =>
                setItem({
                  ...item,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="update-button">
            <button onClick={handleSaveItem} className="button">
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
