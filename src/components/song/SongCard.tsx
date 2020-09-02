import React from 'react'
import { Flex, Text, Avatar, Box } from '@chakra-ui/core'
import { Album, Song } from '../../shared'

const DEFAULT_WIDTH = 300

interface SongCardProps {
  song: Song
}

const getImageUrl = (album: Album): string => {
  const imageUrl = album.images.find(image => image.width === DEFAULT_WIDTH)
  return imageUrl ? imageUrl.url : ''
}

const SongCardComp = ({ song }: SongCardProps) => {
  const { name, artists, sharedBy, album } = song
  const imageUrl = getImageUrl(album)
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
    <Box width='30%' >
      <Text>{ artists }</Text>
    </Box>
    <Box width='30%'>
      <Text textAlign='center'>Shared by { sharedBy }</Text>
    </Box>
  </Flex>
)
}

export const SongCard = React.memo(SongCardComp)
