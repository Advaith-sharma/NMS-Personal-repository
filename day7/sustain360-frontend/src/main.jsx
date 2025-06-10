// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Input from './pages/Input';
import Monitor from './pages/Monitor';
import Analytics from './pages/Analytics';
import Permissions from './pages/Permissions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="input" element={<Input />} />
      <Route path="monitor" element={<Monitor />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="permissions" element={<Permissions />} />
    </Route>
    </Routes>
  </BrowserRouter>
);
