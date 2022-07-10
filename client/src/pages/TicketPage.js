import React from "react";
import { Ticket } from "../components";

const TicketPage = () => {
  const tickets = [
    {
      value: "1234",
      name: "Phạm Văn Linh",
      phone: "0123456789",
      type: "Vé ngày",
    },
    {
      value: "dsfasdadasd",
      name: "Phạm Văn Tôi",
      phone: "0123456789",
      type: "Vé tháng",
    },
  ];

  return (
    <div>
      {tickets.map((ticket, index) => {
        return <Ticket ticketInfo={ticket} key={index} />
      })}
    </div>
  );
};

export default TicketPage;
