import React, { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { Flex, Text, Avatar, Box, IconButton } from '@chakra-ui/react'
import { Album, ADD_SONG_TO_PLAYLIST, Song } from '../../shared'
import { useMutation } from '@apollo/client'

const DEFAULT_WIDTH = 300

interface SongCardProps {
  song: Song
  genreId: string
}

interface AddSongHandleProps {
  addSongToPlaylist: any
  setShared: any
  id: string
  name: string
  uri: string
  artists: string
  genreId: string
}

const getImageUrl = (album: Album): string => {
  const imageUrl = album.images.find(image => image.width === DEFAULT_WIDTH)
  return imageUrl ? imageUrl.url : ''
}

const getFormattedDate = () => {
  const currentDate = new Date()
  return {
    day: currentDate.getDate().toString(),
    month: (currentDate.getMonth() + 1).toString(),
    year: currentDate.getFullYear().toString(),
  }
}

const addSongHandle = async ({addSongToPlaylist, setShared, id, name, uri, artists, genreId }: AddSongHandleProps) => {
  const date = getFormattedDate()
  const { data: { addSongToPlaylist: { sharedBy } } } = await addSongToPlaylist({
    variables: {
      song: {
        id,
        name,
        uri,
        artists,
      },
      genreId,
      date,
    }
  })
  setShared(sharedBy)
}

export const SongCard = React.memo(({ song, genreId }: SongCardProps) => {
  const [ addSongToPlaylist, { loading } ] = useMutation(ADD_SONG_TO_PLAYLIST)
  const { name, artists, album, id, uri, sharedBy } = song
  const imageUrl = getImageUrl(album)
  const [shared, setShared] = useState(sharedBy)
  return (
  <Flex
    align='center'
    marginTop='1rem'
    border='1rem'
    rounded='1rem'>
    <Flex width='40%' align='center'>
      <Avatar name={ name } src={ imageUrl }/>
      <Text ml={4}>{ name }</Text>
    </Flex>
    <Box width='15%' >
      <Text>{ artists }</Text>
    </Box>
    <Box width='30%'>
      <Text textAlign='center' visibility={shared ? 'initial' : 'hidden'}>Shared by { shared }</Text>
    </Box>
    <Box width='15%'>
      <IconButton
        icon={!!shared ? <FaCheck/> : <FaPlus/> }
        onClick={() => addSongHandle({ addSongToPlaylist, setShared, id, name, uri, artists, genreId })}
        aria-label="Add to playlist"
        isDisabled={!!shared}
        isLoading={ loading }
        variant="outline"/>
    </Box>
  </Flex>
)})
