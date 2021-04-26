import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'

interface SongCardPlayButtonProps {
  onPlaySongClick: () => void
  shouldShow: boolean
  showLoadingSpinner: boolean
}

const SongCardPlayButtonComponent = ({
  onPlaySongClick,
  shouldShow,
  showLoadingSpinner,
}: SongCardPlayButtonProps) => {
  return (
    <IconButton
      display={{ base: 'none', md: 'inline-flex' }}
      style={{ visibility: shouldShow ? 'visible' : 'hidden' }}
      size="sm"
      marginRight={[1, 2]}
      marginLeft={[1, 2]}
      color={'fontColor.500'}
      icon={<FaPlay />}
      onClick={onPlaySongClick}
      aria-label="Play"
      variant="outline"
      isLoading={showLoadingSpinner}
    />
  )
}

export const SongCardPlayButton = React.memo(SongCardPlayButtonComponent)
