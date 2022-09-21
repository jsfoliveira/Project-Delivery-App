import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div className="global-container">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
