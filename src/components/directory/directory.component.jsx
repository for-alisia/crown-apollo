/** Libraries */
import React from 'react';

/** Components */
import MenuItem from '../menu-item/menu-item.component';

/** Data */
import { SECTIONS as sections } from './directory.data';

/** Styles */
import './directory.styles.scss';

const Directory = () => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
