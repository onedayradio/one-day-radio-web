import gql from 'graphql-tag'

export const playlistSongs = gql`
  fragment PlaylistSongsFull on PlaylistSongs {
    songs {
      id
      name
      sharedBy
      artists
      album {
        images {
          url
          width
          height
        }
      }
    }
  }
`