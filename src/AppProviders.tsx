import React from 'react'
import ReactGA from 'react-ga'
import { ApolloProvider } from '@apollo/client'
import { Router } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { ChakraProvider } from '@chakra-ui/react'

import { Children, browserHistory } from './shared'
import { store, apolloClient } from './core'
import { AppTheme } from './theme'

interface AppProvidersProps {
  children: Children
}

ReactGA.initialize(`${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`)

browserHistory.listen((location) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient()}>
      <Router history={browserHistory}>
        <StoreProvider store={store}>
          <ChakraProvider theme={AppTheme}>{children}</ChakraProvider>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  )
}
