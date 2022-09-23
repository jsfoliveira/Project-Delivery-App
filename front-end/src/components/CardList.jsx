import React, { useEffect, useState, useContext } from 'react';
import fetchProduct from '../api/fetchProducts';
import stateGlobalContext from '../context/stateGlobalContext';
import Card from './Card';

function CardList() {
  const [productsList, setProductList] = useState([]);
  const { purchaseTotal } = useContext(stateGlobalContext);
  console.log('TESTE', purchaseTotal);

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
            <Card product={ prod } />
          </div>
        ))
      }
    </>
  );
}

export default CardList;
