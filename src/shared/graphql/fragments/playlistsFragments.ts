import gql from 'graphql-tag'

export const playlistSongs = gql`
  fragment PlaylistSongsFull on PlaylistSong {
    song {
      id
      name
      spotifyId
      spotifyUri
      artistSpotifyIds
      artistsNames
      albumSpotifyId
      albumName
      albumImage300
    }
    sharedBy {
      id
      firstname
      lastname
      email
      displayName
    }
    sharedOn
    active
  }
`
