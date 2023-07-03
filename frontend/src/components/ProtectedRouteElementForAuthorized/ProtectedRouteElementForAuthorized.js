import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElementForAuthorized = () => {
  return (
    !localStorage.jwt ? <Outlet /> : <Navigate to="/movies" replace/>
)}

export default ProtectedRouteElementForAuthorized;