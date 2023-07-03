import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElement = () => {
  return (
    localStorage.jwt ? <Outlet /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;