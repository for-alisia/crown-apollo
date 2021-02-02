/** Libraries */
import React from 'react';

/** Components */
import CollectionPreview from '../collection-preview/collection-preview.component';

/** Styles */
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionsOverview;
