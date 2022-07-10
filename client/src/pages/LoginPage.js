import React, { useState } from "react";
import avatar from "../assets/images/login-avatar.jpg";
import { authSelector, login } from "../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import { Loading } from "../components";

const LoginPage = () => {
  // Selector initialState
  const { isAuthenticated, authMsg, isLoading } = useSelector(authSelector);

  // Dispath
  const dispatch = useDispatch();

  // From state
  const [formData, setFromData] = useState({
    phone: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(formData));
  };

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form" onSubmit={handleLogin}>
          <img className="login-image" src={avatar} alt="Ảnh login" />
          <div className="input-group">
            <label className="input-label">Số điện thoại</label>
            <input
              className="input-text"
              type="text"
              placeholder="Số điện thoại"
              name="phone"
              autoComplete="off"
              value={formData.phone}
              onChange={(event) =>
                setFromData({
                  ...formData,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="input-group">
            <label className="input-label">Mật khẩu</label>
            <input
              className="input-text"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              autoComplete="off"
              value={formData.password}
              onChange={(event) =>
                setFromData({
                  ...formData,
                  [event.currentTarget.name]: event.currentTarget.value,
                })
              }
            />
          </div>
          {authMsg && (
            <div className="login-error">
              <FaExclamationTriangle className="error-icon" /> {authMsg}
            </div>
          )}
          <button className="button login-button">Đăng nhập</button>
        </form>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default LoginPage;
