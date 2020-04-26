import gql from 'graphql-tag'

import { userInfoFull } from '../fragments/userFragments'

export const LOAD_AUTH_USER = gql`
  query loadAuthUser {
    user: loadAuthUser {
      ...UserInfoFull
    }
  }
  ${userInfoFull}
`
