import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'

import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'
import { LOAD_PLAYLIST_BY_GENRE, LoadPlaylistResponse } from '../../shared'
import { QueryResponseWrapper } from '../../components'

interface PlaylistsContainerProps {
  genreId: number
}

export default ({ genreId }: PlaylistsContainerProps) => {
  const { data, error, loading } = useQuery<LoadPlaylistResponse>(LOAD_PLAYLIST_BY_GENRE, {
    variables: { genreId },
  })
  const playlistId = data?.playlist.id || -1
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      <Flex backgroundColor="dark.200" height="100%" flexDirection="column">
        <PlaylistGenreBannerContainer genreId={genreId} />
        <PlaylistSongsContainer playlistId={playlistId} />
        <PlaylistGenresContainer />
      </Flex>
    </QueryResponseWrapper>
  )
}
