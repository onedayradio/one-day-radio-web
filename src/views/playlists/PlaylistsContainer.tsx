import React from 'react'
import { Flex } from '@chakra-ui/react'

import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'

interface PlaylistsContainerProps {
  playlistId: number
  genreId: number
}

export default ({ playlistId, genreId }: PlaylistsContainerProps) => {
  return (
    <Flex backgroundColor="dark.200" height="100%" flexDirection="column">
      <PlaylistGenreBannerContainer genreId={genreId} />
      <PlaylistSongsContainer playlistId={playlistId} />
      <PlaylistGenresContainer />
    </Flex>
  )
}
