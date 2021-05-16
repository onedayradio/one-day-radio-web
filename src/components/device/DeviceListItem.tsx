import React from 'react'
import { FaTabletAlt } from 'react-icons/fa'
import { Button, ListItem } from '@chakra-ui/react'

interface DeviceListItemProps {
  deviceId: string
  name?: string
  onClose: () => void
  onSelectDevice: (deviceId: string) => void
  selected?: boolean
}

const handleSelectDevice = async ({ onClose, deviceId, onSelectDevice }: DeviceListItemProps) => {
  onSelectDevice(deviceId)
  onClose()
}

const DeviceListItemComponent = ({
  deviceId,
  name,
  onClose,
  onSelectDevice,
  selected,
}: DeviceListItemProps) => {
  return (
    <ListItem key={deviceId}>
      <Button
        variant="ghost"
        width="100%"
        leftIcon={<FaTabletAlt color="#888f90" /> /* not work dark.700*/}
        onClick={() => handleSelectDevice({ onClose, deviceId, onSelectDevice })}
        justifyContent="flex-start"
        overflow="hidden"
        textColor={selected ? 'spotify.200' : 'fontColor.200'}
      >
        {name}
      </Button>
    </ListItem>
  )
}

export const DeviceListItem = React.memo(DeviceListItemComponent)
