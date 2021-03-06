import gql from 'graphql-tag'

import { playlistSongs } from '../fragments/playlistsFragments'

export const ADD_SONG_TO_PLAYLIST = gql`
  mutation($genreId: Int, $song: SongInput) {
    playlistSong: addSongToPlaylist(genreId: $genreId, song: $song) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`
