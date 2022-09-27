import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchSales from '../api/fetchSales';
import Header from '../components/Header';

import stateGlobalContext from '../context/stateGlobalContext';
import { readLocal } from '../helpers/localStorage';

function Checkout() {
  const { sumTotal, purchaseTotal, setPurchaseTotal } = useContext(stateGlobalContext);
  const [addressCheckout, setAddressCheckout] = useState('');
  const [numberAddressCheckout, setNumberAddressCheckout] = useState('');
  const navigate = useNavigate();

  const removeItem = (id) => {
    const item = purchaseTotal.filter((product) => +product.id !== +id);
    setPurchaseTotal(item);
  };

  const handleInputChange = async (target) => {
    if (target.name === 'addressCheckout') setAddressCheckout(target.value);
    if (target.name === 'numberAddressCheckout') setNumberAddressCheckout(target.value);
  };

  function navigateTo(path) {
    navigate(path);
  }
  async function handleClick() {
    const sales = {
      sellerId: 2,
      totalPrice: sumTotal,
      deliveryAddress: addressCheckout,
      deliveryNumber: numberAddressCheckout,
    };
    const products = purchaseTotal
      .map((element) => ({ productId: element.id, quantity: element.counter }));
    const token = readLocal('user');
    const { data } = await fetchSales(token.token, { sales, products });
    navigateTo(`/customer/orders/${data.userId}`);
  }

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
                <td data-testid={ dRemove }>
                  <button
                    type="submit"
                    onClick={ () => removeItem(product.id) }
                  >
                    Remover
                  </button>

                </td>
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
            name="addressCheckout"
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ ({ target }) => handleInputChange(target) }
          />
        </label>
        <br />
        <label htmlFor="numberAddressCheckout">
          Número
          <br />
          <input
            id="numberAddressCheckout"
            name="numberAddressCheckout"
            data-testid="customer_checkout__input-address-number"
            type="text"
            onChange={ ({ target }) => handleInputChange(target) }
          />
        </label>
        <br />
        <button
          onClick={ print }
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          onClick={ handleClick }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default Checkout;
