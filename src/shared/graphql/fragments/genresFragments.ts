import gql from 'graphql-tag'

export const genreInfoFull = gql`
  fragment GenreInfoFull on Genre {
    id
    name
  }
`
