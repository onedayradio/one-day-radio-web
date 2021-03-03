import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { Button, ListItem } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { PLAY_ON_DEVICE } from '../../shared'

interface DeviceListItemProps {
  deviceId: string
  name?: string
  onClose: () => void
  playlistId: number
}

const onPlay = async (
  playOnDevice: any,
  { onClose, deviceId, playlistId }: DeviceListItemProps,
) => {
  await playOnDevice({
    variables: {
      deviceId,
      playlistId,
    },
  })
  onClose()
}

export const DeviceListItem = React.memo(
  ({ deviceId, name, onClose, playlistId }: DeviceListItemProps) => {
    const [playOnDevice, { loading }] = useMutation(PLAY_ON_DEVICE)
    return (
      <ListItem key={deviceId}>
        <Button
          variant="ghost"
          width="100%"
          leftIcon={<BiPlayCircle color="#52b85e" /> /* not work spotify.200*/}
          onClick={() => onPlay(playOnDevice, { onClose, deviceId, playlistId })}
          isLoading={loading}
          justifyContent="flex-start"
        >
          {name}
        </Button>
      </ListItem>
    )
  },
)
