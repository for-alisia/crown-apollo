/** Libraries */
import { gql } from 'apollo-boost';

export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

export const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

export const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartTotal @client
    cartItems @client
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItem($item: Item!) {
    removeItem(item: $item) @client
  }
`;

export const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItem($item: Item!) {
    clearItem(item: $item) @client
  }
`;

export const GET_USER_AND_CART_HIDDEN = gql`
  {
    currentUser @client
    cartHidden @client
  }
`;

export const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

export const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;
