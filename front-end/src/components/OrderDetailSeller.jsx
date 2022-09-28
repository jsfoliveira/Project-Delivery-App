import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchCardOrder from '../api/fetchCardOrder';
import fetchSalesGet from '../api/fetchSalesGet';
import stateGlobalContext from '../context/stateGlobalContext';
import { readLocal } from '../helpers/localStorage';

function OrderDetailSeller() {
  const { convertDate } = useContext(stateGlobalContext);
  const params = useParams();
  const [order, setOrder] = useState({});
  const [status, setStatus] = useState('PENDENTE');
  const [disabled, setDisabled] = useState(false);

  const sumTotalOrder = (array) => array.reduce((acc, curr) => {
    acc += +curr.SalesProducts.quantity * +curr.price;
    return acc;
  }, 0);

  const totalValue = (quantity, price) => (+quantity * +price).toFixed(2);

  const addZeros = (num) => {
    let numberWithZeros = String(num);
    let counter = numberWithZeros.length;
    const maxSize = 4;

    while (counter < maxSize) {
      numberWithZeros = `0${numberWithZeros}`;
      counter += 1;
    }

    return numberWithZeros;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = readLocal('user');
    const getOrders = await fetchCardOrder(token.token);
    const getSellers = await fetchSalesGet(token.token);
    if (getOrders && getSellers) {
      const getOrder = getOrders.data.find((element) => +params.id === +element.id);
      setOrder(getOrder);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prepareDelivery = () => {
    setStatus('PREPARANDO');
  };

  const outToDelivery = () => {
    setDisabled(true);
    setStatus('ENTREGUE');
  };

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        Pedido:
        {' '}
        { addZeros(order.id) }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        Data:
        {' '}
        { convertDate(order.saleDate) }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        Status:
        {' '}
        { status }
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        onClick={ prepareDelivery }
        type="button"
        disabled={ disabled }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ outToDelivery }
        type="button"
      >
        SAIU PARA ENTREGA
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
            const item = `seller_order_details__element-order-table-item-number-${i}`;
            const description = `seller_order_details__element-order-table-name-${i}`;
            const quantity = `seller_order_details__element-order-table-quantity-${i}`;
            const uPrice = `seller_order_details__element-order-table-unit-price-${i}`;
            const total = `seller_order_details__element-order-table-sub-total-${i}`;
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
          data-testid="seller_order_details__element-order-total-price"
        >
          { `${order.Products && sumTotalOrder(order.Products)
            .toFixed(2).toString().replace('.', ',')}` }
        </span>
      </h1>
    </>
  );
}

export default OrderDetailSeller;
