import React, { useState } from 'react'
import { Center, Flex, Text, Avatar, Spacer } from '@chakra-ui/react'

import { PlaylistSong } from '../../shared'
import { SongCardActionButton } from './SongCardActionButton'
import { SongCardPlayButton } from './SongCardPlayButton'

interface SongCardProps {
  playlistSong: PlaylistSong
  searchMode: boolean
  showActionButtonLoading: boolean
  showPlayButtonLoading: boolean
  onAddSong: (playlistSong: PlaylistSong) => void
  onPlaySong: (playlistSong: PlaylistSong) => void
}

const SongCardComponent = ({
  playlistSong,
  searchMode,
  showActionButtonLoading,
  showPlayButtonLoading,
  onAddSong,
  onPlaySong,
}: SongCardProps) => {
  const [isMouseHover, setIsMouseOver] = useState<boolean>(false)
  const { sharedBy, song } = playlistSong
  const { name, artistsNames, albumImage300 } = song
  return (
    <Flex
      boxShadow="dark-lg"
      rounded="md"
      align="center"
      padding={3}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      _hover={{
        background: 'dark.500',
      }}
    >
      <SongCardPlayButton
        onPlaySongClick={() => onPlaySong(playlistSong)}
        shouldShow={searchMode ? false : isMouseHover}
        showLoadingSpinner={showPlayButtonLoading}
      />
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
      {searchMode && (
        <SongCardActionButton
          onAddSongClick={() => onAddSong(playlistSong)}
          playlistSong={playlistSong}
          showLoadingSpinner={showActionButtonLoading}
        />
      )}
    </Flex>
  )
}

export const SongCard = React.memo(SongCardComponent)
