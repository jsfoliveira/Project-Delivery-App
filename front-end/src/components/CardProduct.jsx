import React, { useEffect, useState } from 'react';
import fetchProduct from '../api/fetchProducts';

function CardProduct() {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const prodList = await fetchProduct();
      setProductList(prodList.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      {
        productsList.map((prod, index) => (
          <div key={ index }>
            <p
              data-testid={ `customer_products__element-card-title-${prod.id}` }
            >
              { prod.name }
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
              src={ prod.urlImage }
              alt={ prod.name }
            />
            <p
              data-testid={ `customer_products__element-card-price-${prod.id}` }
            >
              { prod.price }
            </p>
            <button
              data-testid={ `customer_products__button-card-add-item-${prod.id}` }
              type="submit"
            >
              +
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${prod.id}` }
              type="number"
            />
            <button
              data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
              type="submit"
            >
              -
            </button>
          </div>
        ))
      }
    </>
  );
}

export default CardProduct;
