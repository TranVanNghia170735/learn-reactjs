import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeatures.propTypes = {
    
};

function CartFeatures(props) {
    const cartTotal = useSelector(cartTotalSelector);

    return (
        <div>
            Cart Feature {cartTotal}
        </div>
    );
}

export default CartFeatures;