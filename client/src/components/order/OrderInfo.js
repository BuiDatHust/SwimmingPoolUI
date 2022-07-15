import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "../../store/reducers/orderSlice";
import { AiOutlineClose } from "react-icons/ai";
import { toggleOrderInfo } from "../../store/reducers/appSlice";

const OrderInfo = () => {
  // State
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState({
    name: "",
    price: 0,
    quantity: 0,
    image: "",
  });

  // Selector
  const { itemSelected } = useSelector(orderSelector);

  // Dispatch
  const dispatch = useDispatch();

  // Close popup
  const handleClosePopup = () => {
    dispatch(toggleOrderInfo());
  };

  useEffect(() => {
    setItem(itemSelected);
    setPrice(itemSelected.price);
  }, [itemSelected]);

  useEffect(() => {
    setPrice(amount * item.price);
  }, [amount, item]);

  const plusItem = () => {
    setAmount((prev) => prev + 1);
  };

  const minusItem = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="order-info-bg">
      <div className="order-info-wrapper">
        <div className="order-info-header">
          <h3>Thông tin sản phẩm</h3>
          <AiOutlineClose
            className="close-button"
            title="Đóng"
            onClick={handleClosePopup}
          />
        </div>
        <div className="order-info-body">
          {/* Ảnh sản phẩm */}
          <div className="order-image-wrapper">
            <img className="order-image" src={item.image} alt="Ảnh sản phẩm" />
          </div>
          {/* Thông tin mu hàng */}
          <div className="order-info">
            <div>
              <h4 className="item-info item-name">{item.name}</h4>
              <div className="item-info item-quantity">
                <span>Số lượng: </span>
                <div style={{ display: "flex" }}>
                  <div className="amount-minus" onClick={minusItem}>
                    -
                  </div>
                  <div className="amount-number">{amount}</div>
                  <div className="amount-plus" onClick={plusItem}>
                    +
                  </div>
                </div>
              </div>
              <div className="item-info item-total-price">
                <span>Tổng tiền: </span>
                <div style={{ color: "#2196f3" }}>
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            </div>
            <button className="button">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
