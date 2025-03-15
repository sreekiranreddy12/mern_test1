import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Default homepage */}
        <Route path="/admin" element={<AdminLogin />} /> {/* ✅ Admin login */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* ✅ Admin dashboard */}
        <Route path="*" element={<Home />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;
