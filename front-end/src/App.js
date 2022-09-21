import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div className="global-container">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
