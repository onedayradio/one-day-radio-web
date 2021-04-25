import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { omit } from 'lodash'

import { QueryResponseWrapper, SearchBar, SongCard, SongCards } from '../../components'
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
  PLAY_ON_DEVICE,
} from '../../shared'
import { Box, useToast } from '@chakra-ui/react'

interface PlaylistsContainerProps {
  playlistId: number
}

const getQuery = (searchText?: string) => (searchText ? SEARCH_SONGS : LOAD_PLAYLIST_SONGS)

const getQueryParams = (playlistId: number, searchText?: string) =>
  searchText ? { playlistId, searchText } : { playlistId }

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
  const [playOnDevice, { loading: isPlayingSong }] = useMutation(PLAY_ON_DEVICE)

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

  const playSongHandler = async (playlistSong: PlaylistSong, showToast: boolean) => {
    try {
      setActiveSong(playlistSong.song)
      if (showToast) {
        toastsHelper.showInfoToast('Playing your song on your spotify device!', toast)
      }
      await playOnDevice({
        variables: { playlistId, spotifySongUri: playlistSong.song.spotifyUri },
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
          <SongCards>
            {playlistSongs.map((playlistSong) => (
              <SongCard
                key={playlistSong.song.spotifyId}
                playlistSong={playlistSong}
                onAddSong={addSongHandler}
                onPlaySong={playSongHandler}
                searchMode={searchText ? true : false}
                showActionButtonLoading={
                  activeSong?.spotifyId === playlistSong.song.spotifyId
                    ? isAddingSongToPlaylist
                    : false
                }
                showPlayButtonLoading={
                  activeSong?.spotifyId === playlistSong.song.spotifyId ? isPlayingSong : false
                }
              />
            ))}
          </SongCards>
        </Box>
      </QueryResponseWrapper>
    </>
  )
})
