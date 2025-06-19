// src/App.jsx (final)
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import AdminPage1 from "./pages/AdminPage1";
import UserPage1 from "./pages/UserPage1";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute allowedRole="SuperAdmin" />}>
        <Route path="/add-user" element={<AddUser />} />
      </Route>

      <Route element={<ProtectedRoute allowedRole="Admin" />}>
        <Route path="/admin-page" element={<AdminPage1 />} />
      </Route>

      <Route element={<ProtectedRoute allowedRole="User" />}>
        <Route path="/user-page" element={<UserPage1 />} />
      </Route>

      <Route path="/unauthorized" element={<h1>Access Denied</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}



