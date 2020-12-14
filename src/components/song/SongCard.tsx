import React, { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { Flex, Text, Avatar, Box, IconButton } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { omit } from 'lodash'

import { AddSongToPlaylistResponse, ADD_SONG_TO_PLAYLIST, PlaylistSong, Song } from '../../shared'

interface SongCardProps {
  playlistSong: PlaylistSong
  playlistId: number
}

interface AddSongHandleProps {
  playlistId: number
  addSongToPlaylist: any
  setShared: any
  song: Song
}

const addSongHandler = async ({
  playlistId,
  addSongToPlaylist,
  setShared,
  song,
}: AddSongHandleProps) => {
  const songInput = omit(song, 'id', '__typename')
  const { data } = await addSongToPlaylist({
    variables: {
      song: songInput,
      playlistId,
    },
  })
  const { playlistSong } = data as AddSongToPlaylistResponse
  const { sharedBy } = playlistSong
  setShared(sharedBy?.displayName)
}

export const SongCard = React.memo(({ playlistSong, playlistId }: SongCardProps) => {
  const [addSongToPlaylist, { loading }] = useMutation<AddSongToPlaylistResponse>(
    ADD_SONG_TO_PLAYLIST,
  )
  const { sharedBy, song } = playlistSong
  const { name, artistsNames, albumImage300 } = song
  const [shared, setShared] = useState(sharedBy?.displayName)
  return (
    <Flex align="center" marginTop="1rem" border="1rem" rounded="1rem">
      <Flex width="40%" align="center">
        <Avatar name={name} src={albumImage300} />
        <Text ml={4}>{name}</Text>
      </Flex>
      <Box width="15%">
        <Text>{artistsNames}</Text>
      </Box>
      <Box width="30%">
        <Text textAlign="center" visibility={shared ? 'initial' : 'hidden'}>
          Shared by {shared}
        </Text>
      </Box>
      <Box width="15%">
        <IconButton
          style={{ color: 'black' }}
          icon={!!shared ? <FaCheck /> : <FaPlus />}
          onClick={() =>
            addSongHandler({
              playlistId,
              addSongToPlaylist,
              setShared,
              song,
            })
          }
          aria-label="Add to playlist"
          isDisabled={!!shared}
          isLoading={loading}
          variant="outline"
        />
      </Box>
    </Flex>
  )
})
