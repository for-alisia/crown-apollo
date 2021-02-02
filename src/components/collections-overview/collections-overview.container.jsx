// @ts-nocheck
/** Libraries */
import React from 'react';
import { Query } from 'react-apollo';

/** Selectors */
import { GET_COLLECTIONS } from '../../graphql/selectors';

/** Components */
import CollectionOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      return <CollectionOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
