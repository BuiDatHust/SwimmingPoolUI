import React, { useState } from "react";
import { FaStream, FaHome, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = ({ title }) => {
  const [hidden, setHidden] = useState(false);

  const menuItem = [
    {
      path: "/",
      title: "Trang chủ",
      icon: <FaHome />,
    },
    {
      path: "/tickets",
      title: "Mua vé",
      icon: <FaCartPlus />,
    },
  ];

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className={hidden ? "menu hidden" : "menu"}>
      {/* Menu header */}
      <div className="menu-header">
        <h2 className="menu-title">
          <FaStream className="menu-title-icon" onClick={toggleMenu} />
          {hidden ? null : (
            <>
              <Link to="/" className="menu-title-content">
                Quản lý bể bơi
              </Link>
            </>
          )}
        </h2>
      </div>
      {/* Menu items */}
      <div className="menu-items">
        {menuItem.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <div
                className={
                  title === item.title ? "menu-item active" : "menu-item"
                }>
                <div className="menu-item-icon">{item.icon}</div>
                {hidden ? null : (
                  <>
                    <div className="menu-item-title">{item.title}</div>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
