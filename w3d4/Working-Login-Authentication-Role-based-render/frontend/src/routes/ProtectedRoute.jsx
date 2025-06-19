import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRole }) {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    console.log("Inside protected route:");
    console.log("Token: "+token+" \nRole: "+role);

    if (!token) return <Navigate to="/" />;
    if (allowedRole && role?.toLowerCase() !== allowedRole.toLowerCase())
        return <Navigate to="/unauthorized" />;

    return <Outlet />;
}
