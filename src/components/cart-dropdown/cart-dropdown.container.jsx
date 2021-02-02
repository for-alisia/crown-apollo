/** Libraries */
import React from 'react';
import { Query, Mutation } from 'react-apollo';

/** Components */
import CartDropdown from './cart-dropdown.component';

/** Selectors */
import { TOGGLE_CART_HIDDEN, GET_CART_ITEMS } from '../../graphql/selectors';

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => (
          <CartDropdown
            // @ts-ignore
            cartItems={cartItems}
            toggleCartHidden={toggleCartHidden}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
