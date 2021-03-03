import React, { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { Flex, Text, Avatar, Spacer, Stack, IconButton } from '@chakra-ui/react'
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
      <Avatar marginRight={[2, 4]} marginLeft={[1, 2]} name={name} src={albumImage300} />
      <Spacer overflow="hidden">
        <Stack direction={['column', 'row']}>
          <Text color="fontColor.200" width={['100%', '45%']}>
            {name}
          </Text>
          <Text color="fontColor.300" width={['100%', '45%']} isTruncated>
            {artistsNames}
          </Text>
          <Text
            color="fontColor.500"
            textAlign="center"
            display={shared ? 'inherit' : 'none'}
            as="i"
            width={['100%', '45%']}
          >
            Shared by {shared}
          </Text>
        </Stack>
      </Spacer>
      <IconButton
        marginRight={[1, 2]}
        marginLeft={[1, 2]}
        color={!!shared ? 'fontColor.500' : 'fontColor.300'}
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
