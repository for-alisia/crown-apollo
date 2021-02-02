/** Libraries */
import React from 'react';
import { Query } from 'react-apollo';

/** Components */
import Header from './header.component';

/** Selectors */
import { GET_USER_AND_CART_HIDDEN } from '../../graphql/selectors';

const HeaderContainer = () => (
  <Query query={GET_USER_AND_CART_HIDDEN}>
    {({ data: { cartHidden, currentUser } }) => (
      <Header hidden={cartHidden} currentUser={currentUser} />
    )}
  </Query>
);

export default HeaderContainer;
