import React from 'react'
import { FaTabletAlt } from 'react-icons/fa'
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

const DeviceListItemComponent = ({ deviceId, name, onClose, playlistId }: DeviceListItemProps) => {
  const [playOnDevice, { loading }] = useMutation(PLAY_ON_DEVICE)
  return (
    <ListItem key={deviceId}>
      <Button
        variant="ghost"
        width="100%"
        leftIcon={<FaTabletAlt color="#888f90" /> /* not work dark.700*/}
        onClick={() => onPlay(playOnDevice, { onClose, deviceId, playlistId })}
        isLoading={loading}
        justifyContent="flex-start"
        overflow="hidden"
      >
        {name}
      </Button>
    </ListItem>
  )
}

export const DeviceListItem = React.memo(DeviceListItemComponent)
