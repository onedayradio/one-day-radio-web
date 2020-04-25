import gql from 'graphql-tag'

import { userInfoFull } from '../fragments/userFragments'

export const AUTH_SOCIAL = gql`
  mutation authSocial($user: UserInput) {
    auth: authSocial(user: $user) {
      token
      user {
        ...UserInfoFull
      }
    }
  }
  ${userInfoFull}
`
