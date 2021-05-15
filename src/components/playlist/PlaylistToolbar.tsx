import React from 'react'
import { Flex, Spacer } from '@chakra-ui/layout'

import { PlayOnSpotifyButton } from '../playlist/PlayOnSpotifyButton'
import { DevicesPopover } from '../device/DevicesPopover'

interface DevicesToolbarProps {
  playlistId: number
  genreId: number
}

export const PlaylistToolbar = ({ playlistId, genreId }: DevicesToolbarProps) => {
  return (
    <Flex width={['92%', '70%']} margin="auto">
      <PlayOnSpotifyButton playlistId={playlistId} genreId={genreId} />
      <Spacer />
      <DevicesPopover />
    </Flex>
  )
}
