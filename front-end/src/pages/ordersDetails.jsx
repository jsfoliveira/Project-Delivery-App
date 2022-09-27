import React /* { useState, useEffect } */ from 'react';
import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';
// import Table from '../components/Table';

function OrdersDetails() {
  return (
    <>
      <Header />
      <OrderDetails />
      {/* <Table /> */}
    </>
  );
}

export default OrdersDetails;
