// src/components/Sidebar.jsx
import { useState } from "react";
import React from "react";
import { FaBars, FaAngleLeft, FaAngleRight, FaChartBar, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
// const navOptions = [
//   { icon: <FaChartBar />, label: "Dashboard", path: "/dashboard" },
//   { icon: <FaUser />, label: "Input", path: "/input" },
//   { icon: <FaChartBar />, label: "Monitor", path: "/monitor" },
//   { icon: <FaChartBar />, label: "Analytics", path: "/analytics" },
//   { icon: <FaUser />, label: "Permission", path: "/permission" },
// ];//deleted
const navOptions = [
  { icon: FaChartBar, label: "Dashboard", path: "/dashboard" },
  { icon: FaUser, label: "Input", path: "/input" },
  { icon: FaChartBar, label: "Monitor", path: "/monitor" },
  { icon: FaChartBar, label: "Analytics", path: "/analytics" },
  { icon: FaUser, label: "Permission", path: "/permission" },
];//added

// const bottomOptions = [
//   { icon: <FaCog />, label: "Settings" },
//   { icon: <FaSignOutAlt />, label: "Logout" },
// ];//deleted
const bottomOptions = [
  { icon: FaCog, label: "Settings" },
  { icon: FaSignOutAlt, label: "Logout" },
];//added

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`h-screen bg-white shadow-md flex flex-col justify-between transition-all duration-300 ${collapsed ? "w-20" : "w-64"} fixed`}>
      {/* Company Info + Toggle */}
      <div>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">L</div>
            {!collapsed && <span className="font-semibold text-lg">Tool Name</span>}
          </div>
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-600 hover:text-black">
            {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
        </div>

        {/* Navigation Options */}
        <div className="mt-4">
          {/* {navOptions.map((opt, index) => (
            <Link
              to={opt.path}
              key={index}
              className={`flex items-center gap-4 px-4 py-3 hover:bg-emerald-100 cursor-pointer ${
                location.pathname === opt.path ? 'bg-emerald-50' : ''
              }`}
            >
              <div className="text-emerald-700 text-lg">{opt.icon}</div>
              {!collapsed && <span className="text-gray-800 text-sm">{opt.label}</span>}
            </Link>
          ))} //deleted*/}
          {navOptions.map((opt, index) => {
            const Icon = opt.icon;
            return (
              <Link
                to={opt.path}
                key={index}
                className={`flex items-center gap-4 px-4 py-3 hover:bg-emerald-100 cursor-pointer ${location.pathname === opt.path ? 'bg-emerald-50' : ''
                  }`}
              >
                <div className="text-emerald-700 text-lg"><Icon /></div>
                {!collapsed && <span className="text-gray-800 text-sm">{opt.label}</span>}
              </Link>
            );
          })} 
          {/* //added */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mb-4">
        {bottomOptions.map((opt, index) => (
          <div key={index} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <div className="text-gray-600">{<opt.icon/>}</div>
            {!collapsed && <span className="text-sm">{opt.label}</span>}
          </div>
        ))}
        {/* changed opt.icon to <opt.icon/> */}

        {/* Profile */}
        <div className="px-4 pt-4 mt-2 border-t">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">JD</div>
            {!collapsed && (
              <div className="text-sm">
                <div className="font-semibold">Jhon Doe</div>
                <div className="text-gray-500 text-xs">jxxdoe@gmail.com</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
