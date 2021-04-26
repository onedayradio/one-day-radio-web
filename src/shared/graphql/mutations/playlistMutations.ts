import gql from 'graphql-tag'

import { playlistSongs } from '../fragments/playlistsFragments'
import { LOAD_PLAYLIST_SONGS } from '../queries/playlistQueries'

export const ADD_SONG_TO_PLAYLIST = gql`
  mutation($playlistId: Int, $song: SongInput) {
    playlistSong: addSongToPlaylist(playlistId: $playlistId, song: $song) {
      ...PlaylistSongsFull
    }
  }
  ${playlistSongs}
`

export const addSongToPlaylistOptions = (playlistId: number) => ({
  refetchQueries: [
    {
      query: LOAD_PLAYLIST_SONGS,
      variables: {
        playlistId,
      },
    },
  ],
})
