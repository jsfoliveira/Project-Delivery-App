import React, { useContext } from 'react';
import stateGlobalContext from '../context/stateGlobalContext';

function OrderDetails() {
  const { purchaseTotal, sumTotal } = useContext(stateGlobalContext);

  const deliveryOK = () => {
    console.log('GO!');
  };

  const purchasedId = purchaseTotal.id;
  const purchasedName = purchaseTotal.name;

  return (
    <>
      <h2>Detalhe do Pedido</h2>
      <h3
        data-testid={ `customer_order_details__element-order-table-item-number-${
          purchasedId
        }` }
      >
        Pedido
        {' '}
        { purchaseTotal.id }
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
        {}
      </h3>
      <h3 data-testid="customer_order_details__element-order-details-label-order-date">
        OrderDate:
        {}
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
