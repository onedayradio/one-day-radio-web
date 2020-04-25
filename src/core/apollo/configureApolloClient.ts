import { ApolloClient } from '@apollo/client'

import { cache } from './cache'
import { link } from './link'

export const apolloClient = () => {
  const apolloClient = new ApolloClient({
    link,
    cache,
  })
  return apolloClient
}
