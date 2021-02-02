/** Libraries */
import React from 'react';
import { Mutation, Query } from 'react-apollo';

/** Components */
import App from './App';

/** Selectors */
import { GET_CURRENT_USER, SET_CURRENT_USER } from '../graphql/selectors';

const AppContainer = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data: { currentUser } }) => (
      <Mutation mutation={SET_CURRENT_USER}>
        {(setCurrentUser) => {
          return (
            <App
              currentUser={currentUser}
              setCurrentUser={(user) => {
                setCurrentUser({ variables: { user } });
              }}
            />
          );
        }}
      </Mutation>
    )}
  </Query>
);

export default AppContainer;
