import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Manage from './pages/manage';
import OrdersDetails from './pages/ordersDetails';
import Orders from './pages/orders';
import Products from './pages/products';
import Register from './pages/register';
import Seller from './pages/seller';
import OrdersDetailsSeller from './pages/ordersDetailsSeller';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route path="/seller/orders/:id" element={ <OrdersDetailsSeller /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/admin/manage" element={ <Manage /> } />
      <Route path="/seller/orders" element={ <Seller /> } />
    </Routes>
  );
}

export default App;
