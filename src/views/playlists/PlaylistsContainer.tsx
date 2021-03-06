import React from 'react'
import { Flex } from '@chakra-ui/react'

import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'

interface PlaylistsContainerProps {
  genreId: number
}

// eslint-disable-next-line react/display-name
export default ({ genreId }: PlaylistsContainerProps) => {
  console.log('Playlists container, genreId: ', genreId)

  return (
    <Flex backgroundColor="dark.200" height="100%" flexDirection="column">
      <PlaylistGenreBannerContainer genreId={genreId} />
      <PlaylistSongsContainer genreId={genreId} />
      <PlaylistGenresContainer />
    </Flex>
  )
}
