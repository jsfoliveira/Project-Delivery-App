import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Card({ product }) {
  const { name, urlImage, price, id } = product;
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter <= 0) return 0;
    setCounter(counter - 1);
  }

  function handleChange(event) {
    if (Number(event.target.value)) {
      setCounter(Number(event.target.value));
    }
  }

  return (
    <>
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$ ${price.toString().replace('.', ',')}` }
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="submit"
        onClick={ increment }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        onChange={ handleChange }
        value={ Number(counter) }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="submit"
        onClick={ decrement }
      >
        -
      </button>
    </>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default Card;
