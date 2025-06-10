// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useState } from 'react';
import React from "react";

// export default function Layout() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar collapsed={collapsed} />
//       <div className="flex-1 flex flex-col">
//         <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
//         <main className="flex-1 p-4 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ marginLeft: collapsed ? 80 : 266 }}
      >
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet context={{ collapsed }} />
        </main>
      </div>
    </div>
  );
}

