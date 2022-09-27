import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchSalesGet from '../api/fetchSalesGet';
import fetchCardOrder from '../api/fetchCardOrder';
import stateGlobalContext from '../context/stateGlobalContext';
import { readLocal } from '../helpers/localStorage';

function OrderDetails() {
  const { purchaseTotal, sumTotal } = useContext(stateGlobalContext);
  const params = useParams();
  const [listSeller, setListSeller] = useState([]);
  const [order, setOrder] = useState([]);

  // Pedido
  // Descrição
  // SellerName:
  // OrderDate:
  const purchasedId = purchaseTotal.id;
  const purchasedName = purchaseTotal.name;

  // converte a data no formato dd/mm/yy.
  const convertDate = (data) => {
    const now = new Date(data);
    // https://acervolima.com/como-obter-o-mes-e-a-data-do-javascript-no-formato-de-dois-digitos/
    const numberSlice = -2;
    const day = (`0${now.getDate()}`).slice(numberSlice);
    const month = (`0${now.getMonth() + 1}`).slice(numberSlice);
    const result = `${day}/${month}/${now.getFullYear()}`;
    return result;
  };

  const sellerName = async () => {
    const getSeller = await fetchSalesGet();

    return getSeller;
  };

  const deliveryOK = () => {
    console.log(purchaseTotal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = readLocal('user');
    const cardOrder = await fetchCardOrder(token.token, params.id);
    const getSeller = await fetchSalesGet(token.token);

    setOrder(cardOrder);
    setListSeller(getSeller);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      { console.log(listSeller.data) }
      <h2>Detalhe do Pedido</h2>
      <h3
        data-testid={ `customer_order_details__element-order-table-item-number-${
          purchasedId
        }` }
      >
        Pedido
        {' '}
        { }
      </h3>
      <h3
        data-testid={ `customer_order_details__element-order-table-name-${
          purchasedName
        }` }
      >
        Descrição
      </h3>
      <h3 data-testid="customer_order_details__element-order-details-label-seller-name">
        SellerName:
        { }
      </h3>
      <h3 data-testid="customer_order_details__element-order-details-label-order-date">
        OrderDate:
        { convertDate }
      </h3>
      <button
        type="button"
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
          { purchaseTotal.map((product, i) => {
            const item = `customer_order_details__element-order-table-item-number-${i}`;
            const description = `customer_order_details__element-order-table-name-${i}`;
            const quantity = `customer_order_details__element-order-table-quantity- ${i}`;
            const uPrice = `customer_order_details__element-order-table-unit-price-${i}`;
            const subTotal = ((product.price) * (product.counter)).toFixed(2);
            const total = `customer_order_details__element-order-table-sub-total-${i}`;
            return (
              <tr key={ product.id }>
                <td data-testid={ item }>{ i + 1 }</td>
                <td data-testid={ description }>{ product.name }</td>
                <td data-testid={ quantity }>{ product.counter }</td>
                <td data-testid={ uPrice }>
                  { `R$ ${product.price.toString().replace('.', ',')}` }
                </td>
                <td data-testid={ total }>
                  { `R$ ${subTotal.toString().replace('.', ',')}` }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1
        data-testid="customer_order_details__element-order-total-price "
      >
        Total: R$
        {' '}
        { `${sumTotal.toString().replace('.', ',')}` }
      </h1>
    </>
  );
}

export default OrderDetails;
