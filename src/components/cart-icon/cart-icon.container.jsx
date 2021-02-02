/** Libraries */
import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';

/** Component */
import CartIcon from './cart-icon.component';

/** Selectors */
import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/selectors';

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
);

export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);
