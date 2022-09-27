import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchCardOrder from '../api/fetchCardOrder';
import { readLocal } from '../helpers/localStorage';

function CardOrder() {
  const [orders, setOrders] = useState([]);

  // adcionar zero à esquerda do número do pedido
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
    const result = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
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
      <div>
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

          <p data-testid={ `${dataTestidDate}-${id}` }>
            Data:
            {' '}
            { convertDate(saleDate) }
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
    const response = await fetchCardOrder(token.token, userId);
    setOrders(response);
  }, []);

  const renderCardOrders = () => {
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
