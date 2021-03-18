import gql from 'graphql-tag'

export const playlistFull = gql`
  fragment PlaylistFull on Playlist {
    id
    name
    description
    spotifyId
    genreId
  }
`

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
