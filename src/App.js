import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserProfilePage from './pages/UserProfilePage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
