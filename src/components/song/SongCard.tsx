import React, { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { Center, Flex, Text, Avatar, Spacer, Stack, IconButton } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { omit } from 'lodash'

import { AddSongToPlaylistResponse, ADD_SONG_TO_PLAYLIST, PlaylistSong, Song } from '../../shared'

interface SongCardProps {
  playlistSong: PlaylistSong
  genreId: number
}

interface AddSongHandleProps {
  genreId: number
  addSongToPlaylist: any
  setShared: any
  song: Song
}

const addSongHandler = async ({
  genreId,
  addSongToPlaylist,
  setShared,
  song,
}: AddSongHandleProps) => {
  const songInput = omit(song, 'id', '__typename')
  const { data } = await addSongToPlaylist({
    variables: {
      song: songInput,
      genreId,
    },
  })
  const { playlistSong } = data as AddSongToPlaylistResponse
  const { sharedBy } = playlistSong
  setShared(sharedBy?.displayName)
}

const SongCardComponent = ({ playlistSong, genreId }: SongCardProps) => {
  const [addSongToPlaylist, { loading }] = useMutation<AddSongToPlaylistResponse>(
    ADD_SONG_TO_PLAYLIST,
  )
  const { sharedBy, song } = playlistSong
  const { name, artistsNames, albumImage300 } = song
  const [shared, setShared] = useState(sharedBy?.displayName)
  return (
    <Flex boxShadow="dark-lg" rounded="md" align="center" padding={3}>
      <Avatar marginRight={[2, 4]} marginLeft={[1, 2]} name={name} src={albumImage300} />
      <Spacer overflow="hidden">
        <Flex>
          <Center width={['100%', '45%']}>
            <Text color="fontColor.200" padding={3}>
              {name}
            </Text>
          </Center>
          <Center width={['100%', '45%']}>
            <Text color="fontColor.300" padding={3} isTruncated>
              {artistsNames}
            </Text>
          </Center>
          <Center width={['100%', '45%']}>
            <Text
              color="fontColor.500"
              textAlign="center"
              display={shared ? 'inherit' : 'none'}
              as="i"
              padding={3}
            >
              Shared by {shared}
            </Text>
          </Center>
        </Flex>
      </Spacer>
      <IconButton
        marginRight={[1, 2]}
        marginLeft={[1, 2]}
        color={shared ? 'fontColor.500' : 'fontColor.300'}
        icon={shared ? <FaCheck /> : <FaPlus />}
        onClick={() =>
          addSongHandler({
            genreId,
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
}

export const SongCard = React.memo(SongCardComponent)
