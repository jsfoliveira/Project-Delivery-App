import React, { useContext } from 'react';
import Header from '../components/Header';
import stateGlobalContext from '../context/stateGlobalContext';

function Checkout() {
  const { sumTotal, purchaseTotal } = useContext(stateGlobalContext);

  const print = () => {
    console.log(purchaseTotal);
  };

  return (
    <>
      <Header />
      <h3>Finalizar Pedido</h3>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          { purchaseTotal.map((product, index) => {
            const subTotal = (+(product.price) * +(product.counter)).toFixed(2);
            const dItem = `customer_checkout__element-order-table-item-number-${index}`;
            const dName = `customer_checkout__element-order-table-name-${index}`;
            const dQtt = `customer_checkout__element-order-table-quantity-${index}`;
            const dPrice = `customer_checkout__element-order-table-unit-price-${index}`;
            const dTotal = `customer_checkout__element-order-table-sub-total-${index}`;
            const dRemove = `customer_checkout__element-order-table-remove-${index}`;
            return (
              <tr key={ product.id }>
                <td data-testid={ dItem }>{ index + 1 }</td>
                <td data-testid={ dName }>{ product.name }</td>
                <td data-testid={ dQtt }>{ product.counter }</td>
                <td data-testid={ dPrice }>
                  { `R$ ${product.price.toString().replace('.', ',')}` }
                </td>
                <td data-testid={ dTotal }>
                  { `R$ ${subTotal.toString().replace('.', ',')}` }
                </td>
                <td data-testid={ dRemove }><button type="submit">Remover</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {' '}
        { `${sumTotal.toString().replace('.', ',')}` }
      </span>
      <div>
        <label htmlFor="sellersSelectCheckout">
          P. Vendedora Responsável
          <br />
          <select
            id="sellersSelect"
            data-testid="customer_checkout__select-seller"
          >
            <option>
              Fulana
            </option>
          </select>
        </label>
        <br />
        <label htmlFor="addressCheckout">
          Endereço
          <br />
          <input
            id="addressCheckout"
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="numberAddressCheckout">
          Número
          <br />
          <input
            id="numberAddressCheckout"
            data-testid="customer_checkout__input-address-number"
            type="number"
          />
        </label>
        <br />
        <button
          onClick={ print }
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default Checkout;
