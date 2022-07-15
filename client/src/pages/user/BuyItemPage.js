import React from "react";
import { useDispatch } from "react-redux";
import { toggleOrderInfo } from "../../store/reducers/appSlice";
import { selectItem } from "../../store/reducers/orderSlice";

const SingleItem = ({ item }) => {
  // Create dispatch
  const dispatch = useDispatch();

  // Xử lý sự kiện mua hàng
  const handleBuyBtnClick = (it) => {
    dispatch(selectItem(it));
    dispatch(toggleOrderInfo());
  };

  return (
    <>
      <div className="ticket-wrapper">
        <div className="ticket-image-button">
          <img className="ticket-image" src={item.image} alt="Ảnh vé bơi" />
          <button
            className="button buy-button"
            onClick={handleBuyBtnClick.bind(this, item)}>
            Mua hàng
          </button>
        </div>
        <h3>{item.name}</h3>
        <div className="ticket-order">
          <h2 className="ticket-price">
            {item.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h2>
          <div>Còn lại: {item.quantity}</div>
        </div>
      </div>
    </>
  );
};

const BuyItemPage = () => {
  const items = [
    {
      name: "Quần bơi",
      price: 100000,
      quantity: 200,
      image: "https://cf.shopee.vn/file/78d4d34e2c517ca33eef78858dfaeae8",
    },
    {
      name: "Kính bơi",
      price: 60000,
      quantity: 200,
      image: "https://cf.shopee.vn/file/83d69195c9020bb4b328a44600ec0396",
    },
    {
      name: "Phao bơi",
      price: 80000,
      quantity: 200,
      image:
        "https://caygiongbo.com/datafiles/3/2019-04-27/46931585-phao-boi-hinh-qua-bo-thao-duoc.jpg",
    },
    {
      name: "Áo phao",
      price: 60000,
      quantity: 200,
      image: "https://cf.shopee.vn/file/450fecd2013212d21ba72ce5513c3923",
    },
    {
      name: "Mũ bơi",
      price: 100000,
      quantity: 200,
      image:
        "https://sportonline.com.vn/wp-content/uploads/2019/04/mu-boi-bit-tai-whale.jpg",
    },
    {
      name: "Đồ bơi nữ",
      price: 200000,
      quantity: 200,
      image:
        "https://vn-live-01.slatic.net/shop/9fafae24ff1056d9ba1db64f1f3925d5.jpeg",
    },
  ];

  return (
    <div className="buy-ticket-page">
      {items.map((item, index) => {
        return <SingleItem item={item} key={index} />;
      })}
    </div>
  );
};

export default BuyItemPage;
