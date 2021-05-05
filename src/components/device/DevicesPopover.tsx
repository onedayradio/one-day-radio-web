import React, { useState } from 'react'
import { FaTv } from 'react-icons/fa'
import {
  Button,
  List,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'
import { useLazyQuery } from '@apollo/client'
import { DevicesResponse, LOAD_DEVICES } from '../../shared'
import { DeviceListItem } from '..'

const TEXT_BUTTON = 'Devices'

interface ListenOnSpotifyPopoverProps {
  playlistId: number
}

const DevicesPopoverComponent = ({ playlistId }: ListenOnSpotifyPopoverProps) => {
  const [loadDevices, { loading, data }] = useLazyQuery<DevicesResponse>(LOAD_DEVICES, {
    fetchPolicy: 'no-cache',
  })
  const [isOpen, setIsOpen] = useState(false)
  const open = async () => {
    await loadDevices()
    setIsOpen(!isOpen)
  }
  const close = () => setIsOpen(false)
  const devices = data?.devices || []
  return (
    <Popover returnFocusOnClose={false} isOpen={isOpen} onOpen={open} onClose={close}>
      <PopoverTrigger>
        <Button
          height={[9, 10]}
          leftIcon={<FaTv />}
          isLoading={loading}
          loadingText={TEXT_BUTTON}
          iconSpacing={[1, 2]}
          borderRadius="lg"
          fontSize={15}
          fontWeight="400"
          colorScheme="spotify"
        >
          {TEXT_BUTTON}
        </Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4} marginRight={5} marginLeft={5} backgroundColor="dark.200">
        <PopoverArrow backgroundColor="dark.200" />
        <PopoverCloseButton />
        <PopoverHeader textColor="fontColor.200">Spotify Active Devices</PopoverHeader>
        <PopoverBody>
          <List spacing={3}>
            {devices.map(({ name, id }) => (
              <DeviceListItem
                key={id}
                name={name}
                deviceId={id}
                playlistId={playlistId}
                onClose={close}
              />
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export const DevicesPopover = React.memo(DevicesPopoverComponent)
