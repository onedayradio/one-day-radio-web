import React, { useState } from 'react'
import { Flex, Text, Avatar, SimpleGrid, Spacer } from '@chakra-ui/react'

import { PlaylistSong } from '../../shared'
import { SongCardActionButton } from './SongCardActionButton'
import { SongCardPlayButton } from './SongCardPlayButton'

interface SongCardProps {
  playlistSong: PlaylistSong
  searchMode: boolean
  showActionButtonLoading: boolean
  showPlayButtonLoading: boolean
  onAddSong: (playlistSong: PlaylistSong) => void
  onPlaySong: (playlistSong: PlaylistSong, showToast: boolean) => void
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
  let preventPlaySong = false
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
      onTouchMove={() => (preventPlaySong = true)}
      onTouchEnd={() => {
        if (preventPlaySong) {
          preventPlaySong = false
          return
        }
        onPlaySong(playlistSong, true)
      }}
    >
      <SongCardPlayButton
        onPlaySongClick={() => onPlaySong(playlistSong, false)}
        shouldShow={searchMode ? false : isMouseHover}
        showLoadingSpinner={showPlayButtonLoading}
      />
      <Avatar marginRight={[2, 4]} marginLeft={[1, 2]} name={name} src={albumImage300} />
      <Spacer overflow="hidden">
        <SimpleGrid columns={[1, 3]}>
          <Text color="fontColor.300" padding={[1, 3]} isTruncated>
            {name}
          </Text>
          <Text textAlign={['left', 'center']} color="fontColor.200" padding={[1, 3]} isTruncated>
            {artistsNames}
          </Text>
          <Text
            textAlign={['left', 'right']}
            color="fontColor.500"
            display={sharedBy?.displayName ? 'inherit' : 'none'}
            as="i"
            padding={[1, 3]}
          >
            Shared by {sharedBy?.displayName}
          </Text>
        </SimpleGrid>
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
