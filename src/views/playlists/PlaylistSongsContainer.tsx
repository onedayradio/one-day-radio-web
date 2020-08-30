import React from 'react'
import { useQuery } from '@apollo/client'

import { QueryResponseWrapper, SongCard } from '../../components'
import { PlaylistSongsResponse, LOAD_PLAYLIST_SONGS } from '../../shared'
import { Button, Flex, Input, Stack } from '@chakra-ui/core'

interface PlaylistsContainerProps {
  genreId: string
}

export const PlaylistSongsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  const { data, error, loading } = useQuery<PlaylistSongsResponse>(LOAD_PLAYLIST_SONGS, {
    variables: { genreId }
  })
  const playlistSongs = data?.loadPlaylistSongs?.songs || []
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      <Flex mb={2} width='70%' margin='auto'>
        <Input placeholder="Search for a song" />
        <Button ml={2}>Listen on Spotify</Button>
      </Flex>
      <Stack
        spacing={8}
        width='70%'
        margin='auto'>
        {playlistSongs.map((song) =>
          <SongCard
            key={song.id}
            song={song}/>
        )}
      </Stack>
    </QueryResponseWrapper>
  )
})
