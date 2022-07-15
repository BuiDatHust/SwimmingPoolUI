import React from "react";
import { useSelector } from "react-redux";
import { OrderInfo } from "../../components";
import { appSelector } from "../../store/reducers/appSlice";

const Content = (props) => {
  const { isShowOrderInfo } = useSelector(appSelector);

  return (
    <div className="content">
      {props.children}
      {isShowOrderInfo && <OrderInfo />}
    </div>
  );
};

export default Content;
