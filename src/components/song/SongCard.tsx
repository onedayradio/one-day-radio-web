import React from 'react'
import { Center, Flex, Text, Avatar, Spacer } from '@chakra-ui/react'

import { Children, PlaylistSong } from '../../shared'

interface SongCardProps {
  playlistSong: PlaylistSong
  children: Children
}

const SongCardComponent = ({ playlistSong, children }: SongCardProps) => {
  const { sharedBy, song } = playlistSong
  const { name, artistsNames, albumImage300 } = song
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
              display={sharedBy?.displayName ? 'inherit' : 'none'}
              as="i"
              padding={3}
            >
              Shared by {sharedBy?.displayName}
            </Text>
          </Center>
        </Flex>
      </Spacer>
      {children}
    </Flex>
  )
}

export const SongCard = React.memo(SongCardComponent)
