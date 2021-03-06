import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { Button, ListItem } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { PLAY_ON_DEVICE } from '../../shared'

interface DeviceListItemProps {
  deviceId: string
  name?: string
  onClose: () => void
  genreId: number
}

const onPlay = async (playOnDevice: any, { onClose, deviceId, genreId }: DeviceListItemProps) => {
  await playOnDevice({
    variables: {
      deviceId,
      genreId,
    },
  })
  onClose()
}

const DeviceListItemComponent = ({ deviceId, name, onClose, genreId }: DeviceListItemProps) => {
  const [playOnDevice, { loading }] = useMutation(PLAY_ON_DEVICE)
  return (
    <ListItem key={deviceId}>
      <Button
        variant="ghost"
        width="100%"
        leftIcon={<BiPlayCircle color="#52b85e" /> /* not work spotify.200*/}
        onClick={() => onPlay(playOnDevice, { onClose, deviceId, genreId })}
        isLoading={loading}
        justifyContent="flex-start"
      >
        {name}
      </Button>
    </ListItem>
  )
}

export const DeviceListItem = React.memo(DeviceListItemComponent)
