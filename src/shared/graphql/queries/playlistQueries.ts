import gql from 'graphql-tag'

import { pagination } from '../fragments/paginationFragments'
import { playlistSongs } from '../fragments/playlistSongFragments'

export const LOAD_PLAYLIST_SONGS = gql`
  query loadPlaylistSongs($genreId: String) {
    loadPlaylistSongs(genreId: $genreId) {
      ...PaginationFull
      ...PlaylistSongsFull
    }
  }
  ${pagination}
  ${playlistSongs}
`
