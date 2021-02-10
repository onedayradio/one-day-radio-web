import React, { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { Flex, Text, Avatar, Stack, IconButton } from '@chakra-ui/react'
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
    <Flex boxShadow="dark-lg" borderRadius="lg" align="center" padding={2}>
      <Avatar marginRight={4} marginLeft={2} name={name} src={albumImage300} />
      <Stack direction={['column', 'row']} width="100%">
        <Text color="fontColor.200" width="45%">
          {name}
        </Text>
        <Text color="fontColor.300" width="20%" isTruncated>
          {artistsNames}
        </Text>
        <Text
          color="fontColor.500"
          textAlign="center"
          visibility={shared ? 'initial' : 'hidden'}
          as="i"
          width="35%"
        >
          Shared by {shared}
        </Text>
      </Stack>
      <IconButton
        marginRight={2}
        color={!!shared ? 'fontColor.500': 'fontColor.300'}
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
    </Flex>
  )
})
