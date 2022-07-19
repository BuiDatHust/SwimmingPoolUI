import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTicket } from "../../components";
import config from "../../config";
import {
  selectTicket,
  setEditMode,
  ticketSelector,
  toggleAddTicket,
} from "../../store/reducers/ticketSlice";

const TicketsPage = () => {
  // Dispatch, selector
  const dispatch = useDispatch();

  const { tickets, isShowAddTicket } = useSelector(ticketSelector);

  // Handle event
  const handleAddTicket = () => {
    dispatch(setEditMode(config.editMode.ADD));
    dispatch(selectTicket({}));
    dispatch(toggleAddTicket());
  };

  const handleEditTicket = (ticket) => {
    dispatch(setEditMode(config.editMode.EDIT));
    dispatch(selectTicket(ticket));
    dispatch(toggleAddTicket());
  };

  return (
    <div className="manage-ticket-page">
      <div className="manage-header">
        <h2>Danh sách vé bơi</h2>
        <button className="button" onClick={handleAddTicket}>
          Thêm vé mới
        </button>
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
                      style={{ minWidth: "fit-content" }}
                      onClick={handleEditTicket.bind(this, ticket)}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isShowAddTicket && <AddTicket />}
    </div>
  );
};

export default TicketsPage;
