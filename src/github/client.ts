import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'cross-fetch';

import config from '../config';

const httpLink = createHttpLink({
  fetch,
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((context: any, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${config.githubToken}`,
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
