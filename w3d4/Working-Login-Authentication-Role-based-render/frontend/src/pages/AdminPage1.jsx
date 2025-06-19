import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage1() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-4 font-['Roboto']">
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 text-sm text-red-600 hover:underline font-medium"
      >
        Logout
      </button>
      <h1 className="text-2xl font-bold text-[#125640]">Welcome! Admin and SuperAdmin have access to this page</h1>
    </div>
  );
}
