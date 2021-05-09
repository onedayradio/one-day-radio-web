import gql from 'graphql-tag'

import { playlistSongs } from '../fragments/playlistsFragments'

export const LOAD_PLAYLIST_SONGS = gql`
  query loadPlaylistSongs($playlistId: Int) {
    playlistSongs: loadPlaylistSongs(playlistId: $playlistId) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`

export const SEARCH_SONGS = gql`
  query searchSongs($playlistId: Int, $searchText: String) {
    playlistSongs: searchSongs(playlistId: $playlistId, searchText: $searchText) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`
