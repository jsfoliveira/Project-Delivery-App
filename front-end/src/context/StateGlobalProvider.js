import { useState } from 'react';
import PropTypes from 'prop-types';
import stateGlobalContext from './stateGlobalContext';

function StateGlobalProvider(props) {
  const [purchaseTotal, setPurchaseTotal] = useState(1);

  const { Provider } = stateGlobalContext;
  const { children } = props;

  const value = {
    purchaseTotal,
    setPurchaseTotal,
  };

  return <Provider value={ value }>{children}</Provider>;
}

StateGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateGlobalProvider;
