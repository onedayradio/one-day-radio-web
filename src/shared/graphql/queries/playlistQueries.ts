import gql from 'graphql-tag'

import { playlistSongs } from '../fragments/playlistsFragments'

export const LOAD_PLAYLIST_SONGS = gql`
  query loadPlaylistSongs($genreId: String) {
    playlistSongs: loadPlaylistSongs(genreId: $genreId) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`

export const SEARCH_SONGS = gql`
  query searchSongs($genreId: String, $searchText: String) {
    playlistSongs: searchSongs(genreId: $genreId, searchText: $searchText) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`
