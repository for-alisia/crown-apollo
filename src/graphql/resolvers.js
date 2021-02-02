import { gql } from 'apollo-boost';

import {
  addItemToCart,
  getCartItemCount,
  getTotalFromCartUtil,
  removeItemFromCart,
  clearItemFromCartUtil,
} from './cart.utils';

import {
  GET_ITEM_COUNT,
  GET_CART_ITEMS,
  GET_CART_HIDDEN,
  GET_CART_TOTAL,
  GET_CURRENT_USER,
} from './selectors';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }
  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }
  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemCart(item: Item!): [Item!]
    ClearItem(item: Item!): [Item!]
    RemoveItem(item: Item!): [Item!]
    SetCurrentUser(user: User!): User!
  }
`;

const updateItems = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) },
  });

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getTotalFromCartUtil(newCartItems) },
  });

  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems },
  });
};

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });

      return !cartHidden;
    },
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(cartItems, item);

      updateItems(cache, newCartItems);

      return newCartItems;
    },

    removeItem: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = removeItemFromCart(cartItems, item);

      updateItems(cache, newCartItems);

      return newCartItems;
    },

    clearItem: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = clearItemFromCartUtil(cartItems, item);

      updateItems(cache, newCartItems);

      return newCartItems;
    },
    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user },
      });

      return user;
    },
  },
};
