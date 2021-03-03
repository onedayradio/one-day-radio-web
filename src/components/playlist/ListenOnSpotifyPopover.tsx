import React, { useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
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
import { isMobile } from 'react-device-detect'
import { useQuery } from '@apollo/client'
import { DevicesResponse, LOAD_DEVICES } from '../../shared'
import { DeviceListItem } from '..'

const TEXT_BUTTON = isMobile ? '' : 'Listen on Spotify'

interface ListenOnSpotifyPopoverProps {
  playlistId: number
}

export const ListenOnSpotifyPopover = React.memo(({ playlistId }: ListenOnSpotifyPopoverProps) => {
  const { data, loading } = useQuery<DevicesResponse>(LOAD_DEVICES)
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  const devices = data?.devices || []
  return (
    <Popover returnFocusOnClose={false} isOpen={isOpen} onOpen={open} onClose={close}>
      <PopoverTrigger>
        <Button
          leftIcon={<FaSpotify />}
          isLoading={loading}
          loadingText={TEXT_BUTTON}
          iconSpacing={[0, 2]}
          borderRadius="lg"
          fontSize="1rem"
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
})
