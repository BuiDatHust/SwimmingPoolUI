import React, { useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../../components";
import config from "../../config";
import {
  deleteItem,
  getItems,
  itemSelector,
  selectItem,
  setCategoryName,
  setEditMode,
  toggleAddItem,
} from "../../store/reducers/itemSlice";

const TicketsPage = () => {
  // Dispatch, selector
  const dispatch = useDispatch();

  const { items, isShowAddItem } = useSelector(itemSelector);

  const handleAddItem = (item) => {
    dispatch(setEditMode(config.editMode.ADD));
    openPopup(item);
  };

  const handleEditItem = (item) => {
    dispatch(selectItem(item));
    dispatch(setEditMode(config.editMode.EDIT));
    openPopup(item);
  };

  const openPopup = (item) => {
    dispatch(setCategoryName(config.categoryName.TICKET));
    dispatch(selectItem(item));
    dispatch(toggleAddItem());
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  useEffect(() => {
    dispatch(getItems({ itemType: "ticketDate,ticketMonth" }));
  }, [dispatch]);

  return (
    <div className="manage-ticket-page">
      <div className="manage-header">
        <h2>Danh sách vé bơi</h2>
        <button className="button" onClick={handleAddItem.bind(this, {})}>
          <div className="button-text">Thêm mới vé bơi</div>
        </button>
      </div>
      <div className="manage-table">
        {items.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th className="item-name" style={{ width: "30%" }}>
                  <div>Tên sản phẩm</div>
                </th>
                <th className="item-price" style={{ width: "10%" }}>
                  <div>Giá bán</div>
                </th>
                <th className="item-type" style={{ width: "10%" }}>
                  <div>Loại vé</div>
                </th>
                <th className="item-description" style={{ width: "20%" }}>
                  <div>Mô tả</div>
                </th>
                <th className="item-action" style={{ width: "30%" }}>
                  <div>Thao tác</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item._id}>
                    <td className="item-name">
                      <div className="cart-item">
                        <img
                          className="cart-item-image"
                          src={item.image}
                          alt="Hình ảnh đồ bơi"
                        />
                        <div>{item.itemName}</div>
                      </div>
                    </td>
                    <td
                      className="item-price"
                      style={{ textAlign: "center", color: "#2196f3" }}
                    >
                      {item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td className="item-type" style={{ textAlign: "center" }}>
                      {item.itemType === config.itemType.DATE
                        ? "Vé ngày"
                        : "Vé tháng"}
                    </td>
                    <td className="item-description">{item.description}</td>
                    <td className="item-action" style={{ textAlign: "center" }}>
                      <button
                        className="button"
                        style={{ minWidth: "fit-content", marginRight: "12px" }}
                        onClick={handleEditItem.bind(this, item)}
                      >
                        <div className="button-text">
                          <FaPen />
                        </div>
                      </button>
                      <button
                        className="button button-danger"
                        style={{ minWidth: "fit-content" }}
                        onClick={handleDeleteItem.bind(this, item._id)}
                      >
                        <div className="button-text">
                          <FaTrash />
                        </div>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>Chưa có vé bơi nào</div>
        )}
      </div>
      {isShowAddItem && <AddItem />}
    </div>
  );
};

export default TicketsPage;
