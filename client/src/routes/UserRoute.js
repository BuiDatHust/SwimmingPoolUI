import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { authSelector } from "../store/reducers/authSlice";

const UserRoute = () => {
  const { isAuthenticated, user } = useSelector(authSelector);

  return isAuthenticated && user.role === "user" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserRoute;
