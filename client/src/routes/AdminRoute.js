import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { authSelector } from "../store/reducers/authSlice";

const AdminRoute = () => {
  const { isAuthenticated, user } = useSelector(authSelector);

  return isAuthenticated && user.role === "admin" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute;
