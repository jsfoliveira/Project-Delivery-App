import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stateGlobalContext from '../context/stateGlobalContext';

function TotalCart() {
  const { sumTotal } = useContext(stateGlobalContext);
  const navigate = useNavigate();
  const [disable, setDisabled] = useState(true);

  const allowCartButton = () => {
    if (sumTotal > 0) return setDisabled(false);
    return setDisabled(true);
  };

  useEffect(() => {
    allowCartButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sumTotal]);

  return (
    <div>
      <button
        data-testid="customer_products__button-cart"
        type="submit"
        disabled={ disable }
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver carrinho: R$
        {' '}
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { `${sumTotal.toString().replace('.', ',')}` }
        </span>
      </button>
    </div>
  );
}

export default TotalCart;
