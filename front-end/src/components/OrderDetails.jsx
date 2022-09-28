import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchSalesGet from '../api/fetchSalesGet';
import fetchCardOrder from '../api/fetchCardOrder';
import { readLocal } from '../helpers/localStorage';
import stateGlobalContext from '../context/stateGlobalContext';

function OrderDetails() {
  const params = useParams();
  const [order, setOrder] = useState({});
  const [seller, setSeller] = useState('');
  const { convertDate } = useContext(stateGlobalContext);

  // const sellerName = () => {
  //   if(listSeller !== undefined)
  // };

  const sumTotalOrder = (array) => array.reduce((acc, curr) => {
    acc += +curr.SalesProducts.quantity * +curr.price;
    return acc;
  }, 0);

  const deliveryOK = () => {
    console.log(order);
  };

  const totalValue = (quantity, price) => (+quantity * +price).toFixed(2);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = readLocal('user');
    const getOrders = await fetchCardOrder(token.token);
    const getSellers = await fetchSalesGet(token.token);
    if (getOrders && getSellers) {
      const getOrder = getOrders.data.find((element) => +params.id === +element.id);
      const getSeller = getSellers.data
        .find((element) => +getOrder.sellerId === +element.id);

      setOrder(getOrder);
      setSeller(getSeller.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido
        {' '}
        { order.id }
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        SellerName:
        {' '}
        { seller }
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        OrderDate:
        {' '}
        { convertDate(order.saleDate) }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Status:
        {' '}
        { order.status }
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
        onClick={ deliveryOK }
      >
        MARCAR COMO ENTREGUE
      </button>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
          { order.Products && order.Products.map((product, i) => {
            const item = `customer_order_details__element-order-table-item-number-${i}`;
            const description = `customer_order_details__element-order-table-name-${i}`;
            const quantity = `customer_order_details__element-order-table-quantity-${i}`;
            const uPrice = `customer_order_details__element-order-table-unit-price-${i}`;
            const total = `customer_order_details__element-order-table-sub-total-${i}`;
            return (
              <tr key={ product.id }>
                <td data-testid={ item }>{ i + 1 }</td>
                <td data-testid={ description }>{ product.name }</td>
                <td data-testid={ quantity }>{ product.SalesProducts.quantity }</td>
                <td data-testid={ uPrice }>
                  { `R$ ${product.price.toString().replace('.', ',')}` }
                </td>
                <td data-testid={ total }>
                  { `R$ ${totalValue(product.SalesProducts.quantity, product.price)
                    .toString().replace('.', ',')}` }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>
        Total: R$
        {' '}
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          { `${order.Products && sumTotalOrder(order.Products)
            .toFixed(2).toString().replace('.', ',')}` }
        </span>
      </h1>
    </>
  );
}

export default OrderDetails;
