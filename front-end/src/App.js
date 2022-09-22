import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Customer from './pages/customer';

function App() {
  return (
    <div className="global-container">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <Customer /> } />
      </Routes>
    </div>
  );
}

export default App;
