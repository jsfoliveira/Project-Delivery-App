import React from 'react';

function OrderDetailSeller() {
  const prepareDelivery = () => {
    console.log('Preparar pedido');
  };

  const outToDelivery = () => {
    console.log('Saiu pra entrega');
  };

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        Pedido
        {' '}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        Data:
        {' '}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        Status:
        {' '}
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        onClick={ prepareDelivery }
        type="button"
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
