import gql from 'graphql-tag'

export const ADD_SONG_TO_PLAYLIST = gql`
  mutation($genreId: String, $song: SongInput, $date: DateDataInput) {
    addSongToPlaylist(genreId: $genreId, song: $song, date: $date) {
      name
      sharedBy
    }
  }
`
