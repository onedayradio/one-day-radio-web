import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { QueryResponseWrapper, SearchBar, SongCard } from '../../components'
import { PlaylistSongsResponse, LOAD_PLAYLIST_SONGS, SEARCH_SONGS } from '../../shared'
import { Box, Stack } from '@chakra-ui/react'

interface PlaylistsContainerProps {
  genreId: number
}

const getQuery = (searchText?: string) => (searchText ? SEARCH_SONGS : LOAD_PLAYLIST_SONGS)

const getQueryParams = (genreId: number, searchText?: string) =>
  searchText ? { genreId, searchText } : { genreId }

export const PlaylistSongsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  const [searchText, setSearchText] = useState()
  const query = getQuery(searchText)
  const queryParams = getQueryParams(genreId, searchText)
  const { data, error, loading } = useQuery<PlaylistSongsResponse>(query, {
    variables: queryParams,
  })
  const playlistSongs = data?.playlistSongs || []
  return (
    <>
      <SearchBar onSearch={setSearchText} genreId={genreId} />
      <QueryResponseWrapper loading={loading} error={error}>
        <Box
          overflow="hidden"
          height="100%"
          display="flex"
          flexDirection="column"
          width={['100%', '71%']}
          margin={['none', 'auto']}
        >
          <Stack
            sx={{
              '&::-webkit-scrollbar': {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
            spacing={8}
            overflowY="auto"
            padding={3}
          >
            {playlistSongs.map((playlistSong) => (
              <SongCard
                key={playlistSong.song.spotifyId}
                genreId={genreId}
                playlistSong={playlistSong}
              />
            ))}
          </Stack>
        </Box>
      </QueryResponseWrapper>
    </>
  )
})
