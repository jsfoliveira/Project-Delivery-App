import React, { useContext, useEffect } from 'react';
import Header from '../components/HeaderSeller';
import OrderDetailSeller from '../components/OrderDetailSeller';
import stateGlobalContext from '../context/stateGlobalContext';

function OrdersDetailsSeller() {
  const { loading, setLoading } = useContext(stateGlobalContext);

  useEffect(() => {
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      { loading || <OrderDetailSeller />}
    </>
  );
}

export default OrdersDetailsSeller;
