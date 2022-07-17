import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSelector, selectItem, toggleItemInfo } from "../../store/reducers/itemSlice";

const SingleItem = ({ item }) => {
  // Create dispatch
  const dispatch = useDispatch();

  // Xử lý sự kiện mua hàng
  const handleBuyBtnClick = (it) => {
    // Gán item vào state
    dispatch(selectItem(it));
    // Mở popup thông tin sản phẩm
    dispatch(toggleItemInfo());
  };

  return (
    <>
      <div className="ticket-wrapper">
        <div className="ticket-image-button">
          <img className="ticket-image" src={item.image} alt="Ảnh item" />
          <button
            className="button buy-button"
            onClick={handleBuyBtnClick.bind(this, item)}
          >
            Mua hàng
          </button>
        </div>
        <h3>{item.name}</h3>
        <div className="ticket-order">
          <h2 className="ticket-price">
            {item.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h2>
          <div>Còn lại: {item.quantity}</div>
        </div>
      </div>
    </>
  );
};

const BuyItemPage = () => {
  const { items } = useSelector(itemSelector);

  return (
    <div className="buy-ticket-page">
      {items.map((item, index) => {
        return <SingleItem item={item} key={index} />;
      })}
    </div>
  );
};

export default BuyItemPage;
