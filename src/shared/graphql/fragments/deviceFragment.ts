import gql from 'graphql-tag'

export const devices = gql`
  fragment Device on SpotifyDevice {
    id
    name
  }
`
