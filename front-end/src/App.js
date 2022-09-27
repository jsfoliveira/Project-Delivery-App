import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import Checkout from './pages/checkout';
import Register from './pages/register';
import Orders from './pages/orders';
import Manage from './pages/manage';
import OrdersDetails from './pages/ordersDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/admin/manage" element={ <Manage /> } />
    </Routes>
  );
}

export default App;
