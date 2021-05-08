import React from 'react'
import { Flex } from '@chakra-ui/react'

import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'
import { Header } from '../../components'
import { useStoreState } from '../../core'

interface PlaylistsContainerProps {
  playlistId: number
  genreId: number
}

export default ({ playlistId, genreId }: PlaylistsContainerProps) => {
  const currentUser = useStoreState((state) => state.currentUser.user)
  return (
    <Flex backgroundColor="dark.200" height="100%" flexDirection="column">
      <Header user={currentUser} />
      <PlaylistGenreBannerContainer genreId={genreId} />
      <PlaylistSongsContainer genreId={genreId} playlistId={playlistId} />
      <PlaylistGenresContainer />
    </Flex>
  )
}
