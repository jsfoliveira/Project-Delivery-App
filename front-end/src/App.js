import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Customer from './pages/customer';
import Checkout from './pages/checkout';
import Register from './pages/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Customer /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
