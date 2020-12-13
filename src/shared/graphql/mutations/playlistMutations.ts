import gql from 'graphql-tag'

import { playlistSongs } from '../fragments/playlistsFragments'

export const ADD_SONG_TO_PLAYLIST = gql`
  mutation($playlistId: Int, $song: SongInput) {
    playlistSong: addSongToPlaylist(playlistId: $playlistId, song: $song) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`
