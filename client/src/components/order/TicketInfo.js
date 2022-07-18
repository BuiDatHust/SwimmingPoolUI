import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/reducers/orderSlice";
import {
  ticketSelector,
  toggleTicketInfo,
} from "../../store/reducers/ticketSlice";

const TicketInfo = () => {
  // State
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [ticket, setTicket] = useState({
    ticketType: "",
    price: 0,
    image: "",
  });
  const [startTime, setStartTime] = useState(new Date().toString());

  // Selector
  const { ticketSelected } = useSelector(ticketSelector);

  // Dispatch
  const dispatch = useDispatch();

  // CLose popup
  const handleClosePopup = () => {
    dispatch(toggleTicketInfo());
  };

  // Handle amount
  const plusTicket = () => {
    setAmount((prev) => prev + 1);
  };

  const minusTicket = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const newTicket = {
      ticketType: ticket.ticketType,
      amount,
      price,
      startTime,
      image: ticket.image,
      orderType: "ticket",
    };

    dispatch(addItemToCart(newTicket));
    dispatch(toggleTicketInfo());
  };

  // Use effect
  useEffect(() => {
    setTicket(ticketSelected);
    setPrice(ticketSelected.price);
  }, [ticketSelected]);

  useEffect(() => {
    setPrice(amount * ticket.price);
  }, [amount, ticket]);

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
            <img
              className="order-image"
              src={ticket.image}
              alt="Ảnh sản phẩm"
            />
          </div>
          {/* Thông tin mua hàng */}
          <div className="order-info">
            <div>
              <h4 className="item-info item-name">
                {ticket.ticketType === "date" ? "Vé bơi ngày" : "Vé bơi tháng"}
              </h4>
              <div className="item-info item-quantity">
                <span>Số lượng: </span>
                <div style={{ display: "flex" }}>
                  <div className="amount-minus" onClick={minusTicket}>
                    -
                  </div>
                  <div className="amount-number">{amount}</div>
                  <div className="amount-plus" onClick={plusTicket}>
                    +
                  </div>
                </div>
              </div>
              <div className="item-info item-start-time">
                <span>Ngày bắt đầu: </span>
                <input
                  type="date"
                  className="input-date"
                  onChange={(event) => setStartTime(event.currentTarget.value)}
                />
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
            <button className="button" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
