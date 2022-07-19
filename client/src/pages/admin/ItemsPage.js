import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../../components";
import config from "../../config";
import {
  itemSelector,
  selectItem,
  setEditMode,
  toggleAddItem,
  updateItem,
} from "../../store/reducers/itemSlice";

const ItemsPage = () => {
  // Selector, dispatch
  const { items, isShowAddItem, itemSelected } = useSelector(itemSelector);
  const dispatch = useDispatch();

  // useState
  const [isShowImportInput, setIsShowImportInput] = useState(false);
  const [amount, setAmount] = useState(0);

  // Handle event
  const handleAddItem = (item) => {
    dispatch(setEditMode(config.editMode.ADD));
    openPopup(item);
  };

  const handleEditItem = (item) => {
    dispatch(setEditMode(config.editMode.EDIT));
    openPopup(item);
  };

  const openPopup = (item) => {
    dispatch(selectItem(item));
    dispatch(toggleAddItem());
  };

  const showImportPopup = (item) => {
    dispatch(selectItem(item));
    setIsShowImportInput(true);
  };

  const handleImportItem = () => {
    if (parseInt(amount) >= 0) {
      const editItem = {
        ...itemSelected,
        quantity: itemSelected.quantity + parseInt(amount),
      };
      dispatch(updateItem(editItem));
      setIsShowImportInput(false);
      setAmount(0);
    }
  };

  // Import input
  const inputElement = (
    <>
      <div className="import-input-bg">
        <div className="import-input">
          <div className="import-input-header">
            <h3>Nhập số lượng</h3>
            <AiOutlineClose
              className="close-button"
              onClick={() => {
                setIsShowImportInput(false);
                setAmount(0);
              }}
            />
          </div>
          <input
            className="input-text"
            type="number"
            value={amount}
            min="0"
            onChange={(event) => setAmount(event.currentTarget.value)}
          />
          <button className="button" onClick={handleImportItem}>
            Nhập
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="manage-ticket-page">
      <div className="manage-header">
        <h2>Danh sách đồ bơi</h2>
        <button className="button" onClick={handleAddItem.bind(this, {})}>
          Nhập đồ mới
        </button>
      </div>
      <div className="manage-table">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "40%" }}>
                <div>Tên sản phẩm</div>
              </th>
              <th style={{ width: "20%" }}>
                <div>Giá bán</div>
              </th>
              <th style={{ width: "20%" }}>
                <div>Số lượng</div>
              </th>
              <th style={{ width: "20%" }}>
                <div>Thao tác</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item._id}>
                  <td className="cart-item">
                    <div className="cart-item">
                      <img
                        className="cart-item-image"
                        src={item.image}
                        alt="Hình ảnh đồ bơi"
                      />
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center", color: "#2196f3" }}>
                    {item.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td style={{ textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="button"
                      style={{ minWidth: "fit-content", marginRight: "12px" }}
                      onClick={handleEditItem.bind(this, item)}>
                      Sửa
                    </button>
                    <button
                      className="button button-secondary"
                      style={{ minWidth: "fit-content" }}
                      onClick={showImportPopup.bind(this, item)}>
                      Nhập
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isShowAddItem && <AddItem />}
      {isShowImportInput && inputElement}
    </div>
  );
};

export default ItemsPage;
