import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//bulma style, see https://bulma.io/
import 'bulma/css/bulma.css'
//for icons
import 'font-awesome/css/font-awesome.min.css'

const graphQLServerLink = new HttpLink({ uri: 'http://localhost:8888/graphql' })

const client = new ApolloClient({
  link: graphQLServerLink,
  cache: new InMemoryCache()
})

//bind react components with graphQL
const graphQLApp =
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

ReactDOM.render(graphQLApp, document.getElementById('root'));
registerServiceWorker();
