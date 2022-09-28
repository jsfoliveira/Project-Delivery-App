import React, { useContext, useEffect } /* { useState, useEffect } */ from 'react';
import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';
import stateGlobalContext from '../context/stateGlobalContext';
// import Table from '../components/Table';

function OrdersDetails() {
  const { loading, setLoading } = useContext(stateGlobalContext);

  useEffect(() => {
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      { loading || <OrderDetails /> }
      {/* <Table /> */}
    </>
  );
}

export default OrdersDetails;
