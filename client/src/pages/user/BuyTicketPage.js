import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSelector, selectItem, toggleItemInfo } from "../../store/reducers/itemSlice";

const SingleTicket = ({ ticket }) => {
  const dispatch = useDispatch();

  const handleBuyTicket = (tk) => {
    dispatch(selectItem(tk));
    dispatch(toggleItemInfo());
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
  const { items } = useSelector(itemSelector);
  return (
    <div className="buy-ticket-page">
      {items.map((ticket, index) => {
        return <SingleTicket ticket={ticket} key={index} />;
      })}
    </div>
  );
};

export default BuyTicketPage;
