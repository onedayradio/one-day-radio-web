import gql from 'graphql-tag'

export const pagination = gql`
  fragment PaginationFull on PlaylistSongs {
    total
    perPage
    lastPage
    currentPage
    from
    to
  }
`
