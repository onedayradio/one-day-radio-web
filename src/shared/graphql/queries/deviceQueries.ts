import gql from 'graphql-tag'

import { devices } from '../fragments/deviceFragment'

export const LOAD_DEVICES = gql`
  query loadSpotifyDevices {
    devices: loadSpotifyDevices {
      ...Device
    }
  }
  ${devices}
`
