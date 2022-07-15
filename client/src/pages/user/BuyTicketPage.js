import React from "react";
import ticketImge from "../../assets/images/ticket-image.png";

const SingleTicket = ({ ticket }) => {
  return (
    <>
      <div className="ticket-wrapper">
        <div className="ticket-image-button">
          <img className="ticket-image" src={ticketImge} alt="Ảnh vé bơi" />
          <button className="button buy-button">Mua vé</button>
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
  const tickets = [
    {
      tickeType: "date",
      price: 50000,
    },
    {
      tickeType: "month",
      price: 1000000,
    },
  ];

  return (
    <div className="buy-ticket-page">
      {tickets.map((ticket, index) => {
        return <SingleTicket ticket={ticket} key={index} />;
      })}
    </div>
  );
};

export default BuyTicketPage;
