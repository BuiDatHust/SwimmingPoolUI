import React from "react";
import { FaShoppingCart, FaSignOutAlt, FaStream } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/empty-avatar.jpg";
import { toggleMenu } from "../../store/reducers/appSlice";
import { authSelector, logout } from "../../store/reducers/authSlice";
import { orderSelector } from "../../store/reducers/orderSlice";

const Navbar = ({ title }) => {
  // Selector user
  const { user } = useSelector(authSelector);
  const { cartItems } = useSelector(orderSelector);

  // Dispatch
  const dispatch = useDispatch();

  // Breadcrumb
  const breadcrumb = (
    <>
      <Link to="/">Trang chủ</Link> / {title}
    </>
  );

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleShowMenu = () => {
    console.log(111);
    dispatch(toggleMenu());
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-option">
          <FaStream onClick={handleShowMenu} />
        </div>
        <div className="navbar-breadcrumb">
          <h4 className="breadcrumb-title">{title}</h4>
          <span className="breadcrumb-link">
            {title !== "Trang chủ" ? breadcrumb : null}
          </span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-user">
          <h3 className="navbar-name">{user.name}</h3>
          <img className="navbar-avatar" src={avatar} alt="User avatar" />
        </div>
        {user.role === "user" && (
          <Link to="/cart">
            <div className="navbar-item navbar-cart" title="Cart">
              <FaShoppingCart />
              <div>{cartItems.length}</div>
            </div>
          </Link>
        )}
        <div className="navbar-item navbar-logout" title="Logout">
          <FaSignOutAlt onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
