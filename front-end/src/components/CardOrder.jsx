import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchCardOrder from '../api/fetchCardOrder';
import { readLocal } from '../helpers/localStorage';

function CardOrder() {
  const params = useParams();
  const [orders, setOrders] = useState([]);

  // adicionar zero à esquerda do número do pedido
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

  // converter string do valor total
  const convertPrice = (value) => {
    const brlValue = value.toString().replace('.', ',');
    return `R$ ${brlValue}`;
  };

  // datatestId
  const dataTestidID = 'customer_orders__element-order-id-';
  const dataTestidStatus = 'customer_orders__element-delivery-status-';
  const dataTestidDate = 'customer_orders__element-order-date-';
  const dataTestidPrice = 'customer_orders__element-card-price-';

  // renderizando os cards com id, status, saleDate e totalPrice
  const card = (object) => {
    const { id, status, saleDate, totalPrice } = object;
    return (
      <div key={ id }>
        <Link to={ `/customer/orders/${id} ` }>
          <p data-testid={ `${dataTestidID}-${id}` }>
            Pedido:
            {' '}
            { addZeros(id) }
          </p>

          <p data-testid={ `${dataTestidStatus}-${id}` }>
            Status:
            {' '}
            { status }
          </p>

          <p>
            Data:
            {' '}
            <span
              data-testid={ `${dataTestidDate}-${id}` }
            >
              { convertDate(saleDate) }
            </span>
          </p>

          <p data-testid={ `${dataTestidPrice}-${id}` }>
            Preço total:
            {' '}
            { convertPrice(totalPrice) }
          </p>
        </Link>
      </div>
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = readLocal('user');
    const { data } = await fetchCardOrder(token.token, params.id);
    setOrders(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCardOrders = () => {
    console.log('TESTE');
    if (orders.length !== 0 || orders !== undefined) {
      return (
        orders.map((element) => {
          const object = {
            id: element.id,
            status: element.status,
            saleDate: element.saleDate,
            totalPrice: element.totalPrice,
          };
          return card(object);
        })
      );
    }
  };

  return (
    <div>
      { renderCardOrders() }
    </div>
  );
}

export default CardOrder;
