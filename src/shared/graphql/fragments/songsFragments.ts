import gql from 'graphql-tag'

export const songs = gql`
  fragment song on Song {
    id
    name
    sharedBy
    artists
  }
`
