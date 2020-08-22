import React from 'react'
import { useQuery } from '@apollo/client'

import { QueryResponseWrapper, SongCard } from '../../components'
import { playlistSongsResponse, LOAD_PLAYLIST_SONGS } from '../../shared'
import { Stack } from '@chakra-ui/core'

interface PlaylistsContainerProps {
  genreId: string
}

export const PlaylistSongsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  const { data, error, loading } = useQuery<playlistSongsResponse>(LOAD_PLAYLIST_SONGS, {
    variables: { genreId }
  })
  const playlistSongs = data?.loadPlayListSongs?.songs || []
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      <Stack spacing={8}>
        {playlistSongs.map(({
          artists,
          name,
          sharedBy,
          id }) =>
          <SongCard
            key={id}
            artists={artists}
            name={name}
            sharedBy={sharedBy}/>
        )}
      </Stack>
    </QueryResponseWrapper>
  )
})
