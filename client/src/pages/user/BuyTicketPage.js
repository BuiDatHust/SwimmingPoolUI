import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTicket,
  ticketSelector,
  toggleTicketInfo,
} from "../../store/reducers/ticketSlice";

const SingleTicket = ({ ticket }) => {
  const dispatch = useDispatch();

  const handleBuyTicket = (tk) => {
    dispatch(selectTicket(tk));
    dispatch(toggleTicketInfo());
  };

  return (
    <>
      <div className="ticket-wrapper">
        <div className="ticket-image-button">
          <img className="ticket-image" src={ticket.image} alt="Ảnh vé bơi" />
          <button
            className="button buy-button"
            onClick={handleBuyTicket.bind(this, ticket)}
          >
            Mua vé
          </button>
        </div>
        <h3>{ticket.type === "date" ? "Vé bơi ngày" : "Vé bơi tháng"}</h3>
        <div className="ticket-order">
          <h2 className="ticket-price">
            {ticket.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h2>
        </div>
      </div>
    </>
  );
};

const BuyTicketPage = () => {
  const { tickets } = useSelector(ticketSelector);
  return (
    <div className="buy-ticket-page">
      {tickets.map((ticket, index) => {
        return <SingleTicket ticket={ticket} key={index} />;
      })}
    </div>
  );
};

export default BuyTicketPage;
