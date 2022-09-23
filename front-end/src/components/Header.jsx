import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchToken from '../api/fetchToken';

function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const decode = async (key) => {
      const userInfo = await fetchToken(key);
      setUser(userInfo.data);
    };
    const token = JSON.parse(localStorage.getItem('token'));
    decode(token.token);
  }, []);

  return (
    <div>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h3>{ `Usuário: ${user.name}` }</h3>
      </div>
      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </div>
  );
}

export default Header;
