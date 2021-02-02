/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/** Apollo */
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { typeDefs, resolvers } from './graphql/resolvers';

/** Styles */
import './index.css';

/** App */
import { default as App } from './App/App.container';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
  typeDefs,
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    cartTotal: 0,
    currentUser: null,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
