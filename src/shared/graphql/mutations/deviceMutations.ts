import gql from 'graphql-tag'

export const PLAY_ON_DEVICE = gql`
  mutation($playlistId: Int, $deviceId: String) {
    playOnDevice(playlistId: $playlistId, deviceId: $deviceId)
  }
`
