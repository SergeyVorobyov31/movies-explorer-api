import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElement = (props) => {
  return (
    localStorage.jwt ? <Outlet /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;