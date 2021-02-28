import React from 'react'
import { useQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/react'

import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'
import { LoadPlaylistResponse, LOAD_PLAYLIST_BY_GENRE_ID } from '../../shared'
import { QueryResponseWrapper } from '../../components'

interface PlaylistsContainerProps {
  genreId: string
}

export default React.memo(({ genreId }: PlaylistsContainerProps) => {
  console.log('Playlists container, genreId: ', genreId)
  const { data, error, loading } = useQuery<LoadPlaylistResponse>(LOAD_PLAYLIST_BY_GENRE_ID, {
    variables: { genreId: parseInt(genreId) },
  })
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      {data && (
        <Flex backgroundColor="dark.200" height="100%" flexDirection="column">
          <PlaylistGenreBannerContainer genreId={genreId} />
          <PlaylistSongsContainer playlistId={data.playlist.id} />
          <PlaylistGenresContainer />
        </Flex>
      )}
    </QueryResponseWrapper>
  )
})
