import moment from "moment";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { orderSelector } from "../../store/reducers/orderSlice";

const CartPage = () => {
  // Selector
  const { cartItems, totalPrice } = useSelector(orderSelector);

  const handleRemoveItem = (item) => {
    console.log(item);
  };

  const singleTicket = (tk) => {
    return (
      <>
        <td>
          <div className="cart-item">
            <img className="cart-item-image" src={tk.image} />
            <div>
              {tk.ticketType === "date" ? "Vé bơi ngày" : "Vé bơi tháng"}
            </div>
          </div>
        </td>
        <td style={{ textAlign: "center" }}>{tk.amount}</td>
        <td style={{ textAlign: "center", color: "#2196f3" }}>
          {tk.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td style={{ textAlign: "center" }}>
          {moment(new Date(tk.startTime)).format("DD/MM/YYYY")}
        </td>
        <td style={{ textAlign: "center" }}>
          <AiOutlineClose
            className="close-button"
            onClick={handleRemoveItem.bind(this, tk)}
          />
        </td>
      </>
    );
  };

  const singleItem = (it) => {
    return (
      <>
        <td>
          <div className="cart-item">
            <img className="cart-item-image" src={it.image} />
            <div>{it.name}</div>
          </div>
        </td>
        <td style={{ textAlign: "center" }}>{it.amount}</td>
        <td style={{ textAlign: "center", color: "#2196f3" }}>
          {it.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td></td>
        <td style={{ textAlign: "center" }}>
          <AiOutlineClose
            className="close-button"
            onClick={handleRemoveItem.bind(this, it)}
          />
        </td>
      </>
    );
  };

  return (
    <div className="cart-page">
      <div className="cart-left">
        {cartItems.length === 0 ? (
          <img src="https://book.smartercarrentals.com/images/cart.png" />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "40%" }}>
                  <div>Sản phẩm</div>
                </th>
                <th style={{ width: "15%" }}>
                  <div>Số lượng</div>
                </th>
                <th style={{ width: "15%" }}>
                  <div>Giá tiền</div>
                </th>
                <th style={{ width: "20%" }}>
                  <div>Thời gian sử dụng</div>
                </th>
                <th style={{ width: "10%" }}>
                  <div>Xóa</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr key={index}>
                    {item.orderType === "item"
                      ? singleItem(item)
                      : singleTicket(item)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="cart-right">
        <h3>Thông tin thanh toán</h3>
        <div className="item-info item-total-price">
          <div>Tổng tiền: </div>
          <div style={{ color: "#2196f3" }}>
            {totalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className="item-info item-total-price">
          <div>Phí vận chuyển: </div>
          <div style={{ color: "#2196f3" }}>
            {(15000).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className="item-info item-total-price">
          <div>Tổng cộng: </div>
          <div style={{ color: "#2196f3" }}>
            {(totalPrice + 15000).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <button className="button" style={{ width: "100%", marginTop: "12px" }}>
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default CartPage;
