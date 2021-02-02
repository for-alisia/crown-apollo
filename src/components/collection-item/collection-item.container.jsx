/** Libraries */
import React from 'react';
import { Mutation } from 'react-apollo';

/** Component */
import CollectionItem from './collection-item.component';

/** Selectors */
import { ADD_ITEM_TO_CART } from '../../graphql/selectors';

const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {(addItemToCart) => (
      <CollectionItem
        {...props}
        addItem={(item) => addItemToCart({ variables: { item } })}
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
