import React from "react";
import { useSelector } from "react-redux";
import { ticketSelector } from "../../store/reducers/ticketSlice";

const TicketsPage = () => {
  const { tickets } = useSelector(ticketSelector);

  return (
    <div className="manage-ticket-page">
      <div className="manage-header">
        <h2>Danh sách vé bơi</h2>
      </div>
      <div className="manage-table">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "40%" }}>
                <div>Loại vé</div>
              </th>
              <th style={{ width: "20%" }}>
                <div>Giá vé</div>
              </th>
              <th style={{ width: "20%" }}>
                <div>Thao tác</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => {
              return (
                <tr key={index}>
                  <td>
                    {ticket.ticketType === "date" ? "Vé ngày" : "Vé tháng"}
                  </td>
                  <td style={{ textAlign: "center", color: "#2196f3" }}>
                    {ticket.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="button"
                      style={{ minWidth: "fit-content" }}>
                      Sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsPage;
