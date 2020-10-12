import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { ListenOnSpotifyPopover, QueryResponseWrapper, SearchBar, SongCard } from '../../components'
import { PlaylistSongsResponse, LOAD_PLAYLIST_SONGS } from '../../shared'
import { Box, Flex, Stack } from '@chakra-ui/core'

interface PlaylistsContainerProps {
  genreId: string
}

export const PlaylistSongsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  const [searchText, setSearchText] = useState()
  const { data, error, loading } = useQuery<PlaylistSongsResponse>(LOAD_PLAYLIST_SONGS, {
    variables: { genreId, searchText }
  })
  const playlistSongs = data?.loadPlaylistSongs?.songs || []
  return (
    <>
      <Flex width='70%' margin='auto' mt={2}>
        <SearchBar onSearch={setSearchText}/>
        <Box>
          <ListenOnSpotifyPopover genreId={genreId}/>
        </Box>
      </Flex>
      <QueryResponseWrapper loading={loading} error={error}>
        <Stack
          spacing={8}
          width='70%'
          margin='auto'>
          {playlistSongs.map((song) =>
            <SongCard
              key={song.id}
              genreId={genreId}
              song={song}/>
          )}
        </Stack>
      </QueryResponseWrapper>
    </>
  )
})
