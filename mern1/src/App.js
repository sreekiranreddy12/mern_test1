import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">User Form</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;