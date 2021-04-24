import React from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import { get } from 'lodash'

import { PlaylistSong } from '../../shared'

interface SongCardActionButtonProps {
  onAddSongClick: () => void
  playlistSong: PlaylistSong
  isAddingSong: boolean
}

const SongCardActionButtonComponent = ({
  onAddSongClick,
  playlistSong,
  isAddingSong,
}: SongCardActionButtonProps) => {
  const sharedBy = get(playlistSong, 'sharedBy.displayName', null)
  return (
    <IconButton
      marginRight={[1, 2]}
      marginLeft={[1, 2]}
      color={sharedBy ? 'fontColor.500' : 'fontColor.300'}
      icon={sharedBy ? <FaCheck /> : <FaPlus />}
      onClick={onAddSongClick}
      aria-label="Add to playlist"
      isDisabled={!!sharedBy}
      isLoading={isAddingSong}
      variant="outline"
    />
  )
}

export const SongCardActionButton = React.memo(SongCardActionButtonComponent)
