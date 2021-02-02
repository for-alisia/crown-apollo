/** Libraries */
import React from 'react';
import { Link } from 'react-router-dom';

/** Utils */
import { auth } from '../../firebase/firebase.utils';

/** Components */
import { default as CartIcon } from '../cart-icon/cart-icon.container';
import { default as CartDropdown } from '../cart-dropdown/cart-dropdown.container';

/** SVG */
import { ReactComponent as Logo } from '../../assets/crown.svg';

/** Styles */
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

export default Header;
