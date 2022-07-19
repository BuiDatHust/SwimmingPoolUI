import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import {
  insertTicket,
  ticketSelector,
  toggleAddTicket,
  updateTicket,
} from "../../store/reducers/ticketSlice";

const AddTicket = () => {
  // useState
  const [ticket, setTicket] = useState({
    ticketType: "date",
  });

  // Dispatch, selector
  const dispatch = useDispatch();

  const { ticketSelected, editMode } = useSelector(ticketSelector);

  // useEffect
  useEffect(() => {
    setTicket(ticketSelected);
  }, [ticketSelected]);

  // Handle event
  const handleClosePopup = () => {
    dispatch(toggleAddTicket());
  };

  const handleSaveTicket = () => {
    if (editMode === config.editMode.ADD) {
      dispatch(insertTicket(ticket));
    } else if (editMode === config.editMode.EDIT) {
      dispatch(updateTicket(ticket));
    }
    dispatch(toggleAddTicket());
  };

  return (
    <div className="add-item-bg">
      <div className="add-item-wrapper">
        <div className="add-item-header">
          <h3>Thông tin vé</h3>
          <AiOutlineClose
            className="close-button"
            title="Đóng"
            onClick={handleClosePopup}
          />
        </div>
        <div className="add-item-body">
          <div className="input-group">
            <label className="input-label">Loại vé</label>
            <select
              className="input-text"
              name="ticketType"
              value={ticket.ticketType}
              onChange={(event) =>
                setTicket({
                  ...ticket,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            >
              <option value="date">Vé ngày</option>
              <option value="month">Vé tháng</option>
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Giá vé</label>
            <input
              name="price"
              type="number"
              className="input-text"
              value={ticket.price}
              onChange={(event) =>
                setTicket({
                  ...ticket,
                  [event.currentTarget.name]: parseInt(
                    event.currentTarget.value
                  ),
                })
              }
            />
          </div>
          <div className="update-button">
            <button className="button" onClick={handleSaveTicket}>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
