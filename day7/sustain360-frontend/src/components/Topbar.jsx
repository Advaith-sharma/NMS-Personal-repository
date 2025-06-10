// src/components/Topbar.jsx
import { FaBars } from 'react-icons/fa';
import React from "react";

export default function Topbar({ collapsed, setCollapsed }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
      <button
        className="text-gray-600 text-xl"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>
      <div className="text-sm text-gray-600">App / Dashboard / Add Emission</div>
      <div className="text-sm font-medium text-gray-800">Jhon Doe</div>
    </div>
  );
}
