import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { omit } from 'lodash'
import { Box, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router'

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
  afterLoginHelper,
} from '../../shared'
import { useStoreState } from '../../core'

interface PlaylistsContainerProps {
  genreId: number
  playlistId: number
}

const getQuery = (searchText?: string) => (searchText ? SEARCH_SONGS : LOAD_PLAYLIST_SONGS)

const getQueryParams = (playlistId: number, searchText?: string) =>
  searchText ? { playlistId, searchText } : { playlistId }

export const PlaylistSongsContainer = React.memo(
  ({ playlistId, genreId }: PlaylistsContainerProps) => {
    const history = useHistory()
    const currentUser = useStoreState((state) => state.currentUser.user)
    const selectedDeviceId = useStoreState((state) => state.selectedDevice.deviceId)
    const toast = useToast()
    const [searchText, setSearchText] = useState<string>()
    const [activeSong, setActiveSong] = useState<Song>()
    setTimeout(() => currentUser && validateAfterLoginAction(), 1)

    const [addSongToPlaylist, { loading: isAddingSongToPlaylist }] =
      useMutation<AddSongToPlaylistResponse>(
        ADD_SONG_TO_PLAYLIST,
        addSongToPlaylistOptions(playlistId),
      )

    const query = getQuery(searchText)
    const queryParams = getQueryParams(playlistId, searchText)
    const {
      data,
      error,
      loading: isLoadingPlaylistSongs,
    } = useQuery<PlaylistSongsResponse>(query, {
      variables: queryParams,
    })
    const playlistSongs = data?.playlistSongs || []

    const [playOnDevice, { loading: isPlayingSong }] = useMutation(PLAY_ON_DEVICE)

    const addSongHandler = async (playlistSong: PlaylistSong) => {
      const songInput = omit(playlistSong.song, 'id', '__typename')
      if (!currentUser) {
        afterLoginHelper.storeAfterLoginAction({
          route: `genre/${genreId}/playlist/${playlistId}`,
          action: afterLoginHelper.Actions.ADD_SONG,
          songInput,
        })
        toastsHelper.showInfoToast('Login is required to continue', toast)
        history.push('/signIn')
        return
      }
      setActiveSong(playlistSong.song)
      await executeAddSong(songInput, false)
    }

    const playSongHandler = async (playlistSong: PlaylistSong, showToast: boolean) => {
      if (!currentUser) {
        afterLoginHelper.storeAfterLoginAction({
          route: `genre/${genreId}/playlist/${playlistId}`,
          action: afterLoginHelper.Actions.PLAY_SONG,
          spotifySongUri: playlistSong.song.spotifyUri,
        })
        toastsHelper.showInfoToast('Login is required to continue', toast)
        history.push('/signIn')
        return
      }
      setActiveSong(playlistSong.song)
      await executePlayOnDevice(playlistSong.song.spotifyUri, showToast)
    }

    const validateAfterLoginAction = async () => {
      const afterLoginAction = afterLoginHelper.getAndClearAfterLoginAction()
      if (!afterLoginAction) {
        return
      }
      if (afterLoginAction.action === afterLoginHelper.Actions.PLAY_SONG) {
        await executePlayOnDevice(afterLoginAction.spotifySongUri, true)
      }
      if (afterLoginAction.action === afterLoginHelper.Actions.ADD_SONG) {
        await executeAddSong(afterLoginAction.songInput, true)
      }
    }

    const executePlayOnDevice = async (spotifySongUri?: string, showToast?: boolean) => {
      try {
        await playOnDevice({
          variables: { playlistId, spotifySongUri, spotifyDeviceId: selectedDeviceId },
        })
        if (showToast) {
          toastsHelper.showInfoToast('Playing your song on your spotify device!', toast)
        }
      } catch (error) {
        if (error.message === 'Resource not found') {
          toastsHelper.showInfoToast(
            'Please open your favorite Spotify device and try again :)',
            toast,
          )
        } else {
          toastsHelper.showWarningToast(error, toast)
        }
      }
    }

    const executeAddSong = async (songInput?: Partial<Song>, showToast?: boolean) => {
      try {
        await addSongToPlaylist({
          variables: {
            song: songInput,
            playlistId,
          },
        })
        if (showToast) {
          toastsHelper.showInfoToast('Your song has been added to the playlist!', toast)
        }
      } catch (error) {
        toastsHelper.showWarningToast(error, toast)
      }
    }
    return (
      <>
        <Box position="relative" top={-30} height={36}>
          <SearchBar onSearch={setSearchText} playlistId={playlistId} genreId={genreId} />
        </Box>
        <QueryResponseWrapper loading={isLoadingPlaylistSongs} error={error}>
          <Box
            overflow="hidden"
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
                  searchMode={!!searchText}
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
  },
)
