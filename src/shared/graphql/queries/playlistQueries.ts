import gql from 'graphql-tag'

export const LOAD_PLAYLIST_SONGS = gql`
  query loadPlayListSongs($genreId: String){
    loadPlayListSongs(genreId: $genreId){
      total
      perPage
      lastPage
      currentPage
      from
      to
      songs {
        id
        name
        sharedBy
      }
    }
  }
`
