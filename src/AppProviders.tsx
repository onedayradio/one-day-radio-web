import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Router } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { ThemeProvider } from '@chakra-ui/core'

import { Children, browserHistory } from './shared'
import { store, apolloClient } from './core'
import { AppTheme } from './theme'

interface AppProvidersProps {
  children: Children
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient()}>
      <Router history={browserHistory}>
        <StoreProvider store={store}>
          <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  )
}
