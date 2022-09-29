import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import stateGlobalContext from './stateGlobalContext';

function StateGlobalProvider(props) {
  const [purchaseTotal, setPurchaseTotal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [existingUser, setExistingUser] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [sumTotal, setSumTotal] = useState(0);

  const { Provider } = stateGlobalContext;
  const { children } = props;

  const addAndRemovePurchaseTotal = (obj) => {
    const isExists = purchaseTotal.some(({ id }) => obj.id === id);
    if (!isExists && obj.counter > 0) return setPurchaseTotal([...purchaseTotal, obj]);
    const withoutAdditionProduct = purchaseTotal.filter(({ id }) => id !== obj.id);
    if (obj.counter === 0) return setPurchaseTotal([...withoutAdditionProduct]);
    return setPurchaseTotal([...withoutAdditionProduct, obj]);
  };

  const calculator = () => {
    const result = purchaseTotal.reduce((acc, curr) => {
      acc += (curr.counter * Number(curr.price));
      return acc;
    }, 0);
    return result.toFixed(2);
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

  useEffect(() => {
    setSumTotal(calculator());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purchaseTotal]);

  const value = {
    purchaseTotal,
    setPurchaseTotal,
    addAndRemovePurchaseTotal,
    sumTotal,
    convertDate,
    loading,
    setLoading,
    existingUser,
    setExistingUser,
    messageError,
    setMessageError,
  };

  return <Provider value={ value }>{children}</Provider>;
}

StateGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateGlobalProvider;
