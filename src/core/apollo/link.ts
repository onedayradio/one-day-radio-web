import { ApolloLink, createHttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/link-context'

import { authUtil, localStorageUtil, browserHistory } from '../../shared'

const httpLink = createHttpLink({ uri: `${process.env.REACT_APP_API_URL}/graphql` })

const contextLink = setContext(() => {
  return {
    headers: {
      authorization: authUtil.getBearerToken(),
    },
  }
})

const handleAuthTokenLink = new ApolloLink((operation, forward) =>
  forward(operation).map((response) => {
    const { data } = response
    const { auth } = data as any
    if (auth && auth.token) {
      localStorageUtil.storeToken(auth.token)
    }
    return response
  }),
)

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (let { extensions } of graphQLErrors) {
      const code = extensions && extensions.code
      switch (code) {
        case 'UNAUTHENTICATED':
          browserHistory.push({
            pathname: '/',
            state: {
              error: {
                code,
                description: 'Session expired, please login.',
              },
            },
          })
      }
    }
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const link = ApolloLink.from([
  contextLink as any,
  handleAuthTokenLink,
  onErrorLink,
  httpLink,
])
