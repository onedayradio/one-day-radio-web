import gql from 'graphql-tag'

export const PLAY_ON_DEVICE = gql`
  mutation($genreId: String, $deviceId: String) {
    playOnDevice(genreId: $genreId, deviceId: $deviceId)
  }
`
