import React from "react";
import { useSelector } from "react-redux";
import { ItemInfo } from "../../components";
import TicketInfo from "../../components/order/TicketInfo";
import { itemSelector } from "../../store/reducers/itemSlice";
import { ticketSelector } from "../../store/reducers/ticketSlice";

const Content = (props) => {
  const { isShowItemInfo } = useSelector(itemSelector);
  const { isShowTicketInfo } = useSelector(ticketSelector);
  return (
    <div className="content">
      {props.children}
      {isShowItemInfo && <ItemInfo />}
      {isShowTicketInfo && <TicketInfo />}
    </div>
  );
};

export default Content;
