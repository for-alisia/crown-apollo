/** Libraries */
import React from 'react';

/** SVG */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/** Styles */
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

export default CartIcon;
