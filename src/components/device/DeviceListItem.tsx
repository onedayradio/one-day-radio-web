import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import {
  Button,
  ListItem,
} from '@chakra-ui/core'
import { useMutation } from '@apollo/client'
import { PLAY_ON_DEVICE } from '../../shared'

interface DeviceListItemProps {
  deviceId: string
  name?: string
  onClose: () => void
  genreId: string
}

const onPlay = async (playOnDevice: any, { onClose, deviceId, genreId }: DeviceListItemProps) => {
  await playOnDevice({
    variables: {
      deviceId,
      genreId,
    }
  })
  onClose()
}

export const DeviceListItem = React.memo(({ deviceId, name, onClose, genreId }: DeviceListItemProps) => {
  const [ playOnDevice, { loading } ] = useMutation(PLAY_ON_DEVICE)
  return (
    <ListItem key={ deviceId }>
      <Button
        variant='ghost'
        textAlign='left'
        width='100%'
        leftIcon={ BiPlayCircle }
        onClick={ () => onPlay(playOnDevice, { onClose, deviceId, genreId }) }
        isLoading={ loading }>
        { name }
      </Button>
    </ListItem>
  )
})
