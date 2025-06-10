// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import the new layout
import Layout from "./layouts/Layout";

// import each page/component that should render inside the layout
import Dashboard from "./pages/Dashboard";
import Input from "./pages/Input"; // example
import Monitor from "./pages/Monitor"; // example
import Analytics from "./pages/Analytics"; // example
import Permissions from "./pages/Permissions"; // example
import Settings from "./pages/Settings"; // example
import Home from "./pages/Home"; // if you have a landing page
import UserLogin from "./pages/UserLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  
          If you want a “public” landing page without the sidebar,
          you can define it outside the Layout route:
        */}
        <Route path="/login" element={<UserLogin />} />

        {/*  
          All routes under “/app” (or any other prefix) will render 
          Layout first, then inject their own component into <Outlet />. 
          You can also use "/" instead of "/app" if you want sidebar for all pages.
        */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="input" element={<Input />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="permissions" element={<Permissions />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/*  
          Catch-all or 404 can go here: 
          <Route path="*" element={<NotFound />} /> 
        */}
      </Routes>
    </BrowserRouter>
  );
}
