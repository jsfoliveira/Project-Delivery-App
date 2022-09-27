import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchToken from '../api/fetchToken';
import { clearLocal, readLocal } from '../helpers/localStorage';

function Header() {
  const [seller, setseller] = useState({});

  useEffect(() => {
    const decode = async (key) => {
      const userInfo = await fetchToken(key);
      setseller(userInfo.data);
    };
    const appDelivery = readLocal('user');
    decode(appDelivery.token);
  }, []);

  return (
    <div>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        PEDIDOS
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h3>{ `Usuário: ${seller.name}` }</h3>
      </div>
      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => clearLocal() }
      >
        Sair
      </Link>
    </div>
  );
}

export default Header;
