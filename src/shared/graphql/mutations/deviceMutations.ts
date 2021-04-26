import gql from 'graphql-tag'

export const PLAY_ON_DEVICE = gql`
  mutation($playlistId: Int, $spotifyDeviceId: String, $spotifySongUri: String) {
    playOnDevice(
      playlistId: $playlistId
      spotifyDeviceId: $spotifyDeviceId
      spotifySongUri: $spotifySongUri
    )
  }
`
