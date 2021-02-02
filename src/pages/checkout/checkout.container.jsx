/** Libraries */
import React from 'react';
import { flowRight } from 'lodash';
import { graphql } from 'react-apollo';

/** Component */
import CheckoutPage from './checkout.component';

/** Selectors */
import { GET_CART_ITEMS_AND_TOTAL } from '../../graphql/selectors';

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => {
  return <CheckoutPage cartItems={cartItems} total={cartTotal} />;
};

export default flowRight(graphql(GET_CART_ITEMS_AND_TOTAL))(
  CheckoutPageContainer
);
