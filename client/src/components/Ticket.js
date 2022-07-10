import React from "react";
import { QRCodeSVG } from "qrcode.react";

const Ticket = ({ ticketInfo }) => {
  return (
    <div className="ticket">
      <div className="ticket-qr">
        <QRCodeSVG value={ticketInfo.value} size="96" />
      </div>
      <div className="ticket-info">
        <h3 className="ticket-title">Vé vào bể bơi</h3>
        <div className="ticket-user">
          <span>Người mua:</span> {ticketInfo.name}
        </div>
        <div className="ticket-phone">
          <span>Số điện thoại:</span> {ticketInfo.phone}
        </div>
        <div className="ticket-type">
          <span>Loại vé:</span> {ticketInfo.type}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
