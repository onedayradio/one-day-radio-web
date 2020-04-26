import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { ThemeProvider } from '@chakra-ui/core'

import { Children } from './shared'
import { store, apolloClient } from './core'
import { AppTheme } from './theme'

interface AppProvidersProps {
  children: Children
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient()}>
      <BrowserRouter>
        <StoreProvider store={store}>
          <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}
