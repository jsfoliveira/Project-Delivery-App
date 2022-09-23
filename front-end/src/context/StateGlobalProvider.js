import { useState } from 'react';
import PropTypes from 'prop-types';
import stateGlobalContext from './stateGlobalContext';

function StateGlobalProvider(props) {
  const [purchaseTotal, setPurchaseTotal] = useState([]);

  const { Provider } = stateGlobalContext;
  const { children } = props;

  const addAndRemovePurchaseTotal = (obj) => {
    const isExists = purchaseTotal.some(({ id }) => obj.id === id);
    if (!isExists) return setPurchaseTotal([...purchaseTotal, obj]);
    const withoutAdditionProduct = purchaseTotal.filter(({ id }) => id !== obj.id);
    return setPurchaseTotal([...withoutAdditionProduct, obj]);
  };

  const value = {
    purchaseTotal,
    setPurchaseTotal,
    addAndRemovePurchaseTotal,
  };

  return <Provider value={ value }>{children}</Provider>;
}

StateGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateGlobalProvider;
