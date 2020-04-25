import { ApolloLink, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/link-context'

import { authUtil, localStorageUtil } from '../../shared'

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL })

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

export const link = ApolloLink.from([contextLink, handleAuthTokenLink, httpLink])
