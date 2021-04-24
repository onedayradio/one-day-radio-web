import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { omit } from 'lodash'

import { QueryResponseWrapper, SearchBar, SongCard, SongCardActionButton } from '../../components'
import {
  PlaylistSongsResponse,
  LOAD_PLAYLIST_SONGS,
  SEARCH_SONGS,
  AddSongToPlaylistResponse,
  ADD_SONG_TO_PLAYLIST,
  addSongToPlaylistOptions,
  toastsHelper,
  Song,
  PlaylistSong,
} from '../../shared'
import { Box, Stack, useToast } from '@chakra-ui/react'

interface PlaylistsContainerProps {
  playlistId: number
}

const getQuery = (searchText?: string) => (searchText ? SEARCH_SONGS : LOAD_PLAYLIST_SONGS)

const getQueryParams = (playlistId: number, searchText?: string) =>
  searchText ? { playlistId, searchText } : { playlistId }

const stackStlye = {
  '&::-webkit-scrollbar': {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
}

export const PlaylistSongsContainer = React.memo(({ playlistId }: PlaylistsContainerProps) => {
  const toast = useToast()
  const [searchText, setSearchText] = useState<string>()
  const [activeSong, setActiveSong] = useState<Song>()
  const [
    addSongToPlaylist,
    { loading: isAddingSongToPlaylist },
  ] = useMutation<AddSongToPlaylistResponse>(
    ADD_SONG_TO_PLAYLIST,
    addSongToPlaylistOptions(playlistId),
  )
  const query = getQuery(searchText)
  const queryParams = getQueryParams(playlistId, searchText)
  const { data, error, loading: isLoadingPlaylistSongs } = useQuery<PlaylistSongsResponse>(query, {
    variables: queryParams,
  })
  const playlistSongs = data?.playlistSongs || []

  const addSongHandler = async (playlistSong: PlaylistSong) => {
    try {
      setActiveSong(playlistSong.song)
      const songInput = omit(playlistSong.song, 'id', '__typename')
      await addSongToPlaylist({
        variables: {
          song: songInput,
          playlistId,
        },
      })
    } catch (error) {
      toastsHelper.showWarningToast(error, toast)
    }
  }
  return (
    <>
      <SearchBar onSearch={setSearchText} playlistId={playlistId} />
      <QueryResponseWrapper loading={isLoadingPlaylistSongs} error={error}>
        <Box
          overflow="hidden"
          height="100%"
          display="flex"
          flexDirection="column"
          width={['100%', '71%']}
          margin={['none', 'auto']}
        >
          <Stack sx={stackStlye} spacing={8} overflowY="auto" padding={3}>
            {playlistSongs.map((playlistSong) => (
              <SongCard key={playlistSong.song.spotifyId} playlistSong={playlistSong}>
                {searchText && (
                  <SongCardActionButton
                    onAddSongClick={() => addSongHandler(playlistSong)}
                    playlistSong={playlistSong}
                    isAddingSong={
                      activeSong?.spotifyId === playlistSong.song.spotifyId
                        ? isAddingSongToPlaylist
                        : false
                    }
                  />
                )}
              </SongCard>
            ))}
          </Stack>
        </Box>
      </QueryResponseWrapper>
    </>
  )
})
