import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/FormAdm';
import Header from '../components/HeaderManage';
import Table from '../components/TableAdm';
import stateGlobalContext from '../context/stateGlobalContext';
import { readLocal } from '../helpers/localStorage';

function Manage() {
  const { loading, setLoading } = useContext(stateGlobalContext);
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  function switchRole(role) {
    switch (role) {
    case 'customer':
      navigateTo('/customer/products');
      break;
    case 'seller':
      navigateTo('/seller/orders');
      break;
    case 'administrator':
      navigateTo('/admin/manage');
      break;
    default:
      navigateTo('/login');
    }
  }

  useEffect(() => {
    const user = readLocal('user');
    switchRole(user.role);
    setLoading(false);
    console.log('AQUI');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {
        loading || (
          <>
            <Form />
            <Table />
          </>
        )
      }
    </div>
  );
}

export default Manage;
