import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElement = (props) => {
  return (
    props.loggedIn ? <Outlet /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;