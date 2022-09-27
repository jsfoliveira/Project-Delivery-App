import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import stateGlobalContext from './stateGlobalContext';

function StateGlobalProvider(props) {
  const [purchaseTotal, setPurchaseTotal] = useState([]);
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

  useEffect(() => {
    setSumTotal(calculator());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purchaseTotal]);

  const value = {
    purchaseTotal,
    setPurchaseTotal,
    addAndRemovePurchaseTotal,
    sumTotal,
  };

  return <Provider value={ value }>{children}</Provider>;
}

StateGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateGlobalProvider;
