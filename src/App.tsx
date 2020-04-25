import React from 'react'
import { StoreProvider } from 'easy-peasy'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { store, apolloClient } from './core'
import { AppRoutes } from './AppRoutes'

import './app.css'

export const App = () => (
  <ApolloProvider client={apolloClient()}>
    <BrowserRouter>
      <StoreProvider store={store}>
        <AppRoutes />
      </StoreProvider>
    </BrowserRouter>
  </ApolloProvider>
)
