import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { ListenOnSpotifyPopover, QueryResponseWrapper, SearchBar, SongCard } from '../../components'
import { PlaylistSongsResponse, LOAD_PLAYLIST_SONGS, SEARCH_SONGS } from '../../shared'
import { Box, Flex, Stack } from '@chakra-ui/react'

interface PlaylistsContainerProps {
  playlistId: number
}

const getQuery = (searchText?: string) => (searchText ? SEARCH_SONGS : LOAD_PLAYLIST_SONGS)

const getQueryParams = (playlistId: number, searchText?: string) =>
  searchText ? { playlistId, searchText } : { playlistId }

export const PlaylistSongsContainer = React.memo(({ playlistId }: PlaylistsContainerProps) => {
  const [searchText, setSearchText] = useState()
  const query = getQuery(searchText)
  const queryParams = getQueryParams(playlistId, searchText)
  const { data, error, loading } = useQuery<PlaylistSongsResponse>(query, {
    variables: queryParams,
  })
  const playlistSongs = data?.playlistSongs || []
  return (
    <>
      <Flex width="70%" margin="auto" mt={2}>
        <SearchBar onSearch={setSearchText} />
        <Box>
          <ListenOnSpotifyPopover playlistId={playlistId} />
        </Box>
      </Flex>
      <QueryResponseWrapper loading={loading} error={error}>
        <Stack spacing={8} width="70%" margin="auto">
          {playlistSongs.map((playlistSong) => (
            <SongCard
              key={playlistSong.song.spotifyId}
              playlistId={playlistId}
              playlistSong={playlistSong}
            />
          ))}
        </Stack>
      </QueryResponseWrapper>
    </>
  )
})
