import React, { useEffect, useState } from "react";
import {
  FaStream,
  FaHome,
  FaCartPlus,
  FaSwimmer,
  FaChartBar,
  FaTicketAlt,
} from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appSelector, toggleMenu } from "../../store/reducers/appSlice";
import { authSelector } from "../../store/reducers/authSlice";

const Menu = ({ title }) => {
  const [hidden, setHidden] = useState(false);
  const { user } = useSelector(authSelector);
  const { isShowMenu } = useSelector(appSelector);

  const menuItem =
    user.role === "admin"
      ? [
          {
            path: "/",
            title: "Trang chủ",
            icon: <FaHome />,
          },
          {
            path: "/admin/tickets",
            title: "Bán vé",
            icon: <FaCartPlus />,
          },
          {
            path: "/admin/items",
            title: "Đồ bơi",
            icon: <FaSwimmer />,
          },
          {
            path: "/admin/finance-managements",
            title: "Quản lý thu chi",
            icon: <FaChartBar />,
          },
        ]
      : [
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
          {
            path: "/items",
            title: "Mua đồ bơi",
            icon: <FaSwimmer />,
          },
          {
            path: "/me/tickets",
            title: "Vé bơi",
            icon: <FaTicketAlt />,
          },
          {
            path: "/me/wears",
            title: "Đồ bơi",
            icon: <GiUnderwearShorts />,
          },
        ];

  const dispatch = useDispatch();

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  const toggleShowMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600 && window.innerWidth > 480) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }

    if (window.innerWidth <= 600 && window.innerWidth > 480) {
      setHidden(true);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isShowMenu ? "menu-wrapper show" : "menu-wrapper"}>
      {isShowMenu && <div className="menu-bg" onClick={toggleShowMenu}></div>}
      <div className={hidden ? "menu hidden" : "menu"}>
        {/* Menu header */}
        <div className="menu-header">
          <h2 className="menu-title">
            <FaStream className="menu-title-icon" onClick={toggleHidden} />
            {hidden ? null : (
              <>
                <Link
                  to="/"
                  className="menu-title-content"
                  onClick={toggleShowMenu}
                >
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
              <Link to={item.path} key={index} onClick={toggleShowMenu}>
                <div
                  className={
                    title === item.title ? "menu-item active" : "menu-item"
                  }
                >
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
    </div>
  );
};

export default Menu;
