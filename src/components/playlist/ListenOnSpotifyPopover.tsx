import React, { useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import {
  Button,
  List,
  Popover,
  PopoverArrow, PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { DevicesResponse, LOAD_DEVICES } from '../../shared'
import { DeviceListItem } from '..'

const TEXT_BUTTON = 'Listen on Spotify'

interface ListenOnSpotifyPopoverProps {
  genreId: string
}

export const ListenOnSpotifyPopover = React.memo(({ genreId }: ListenOnSpotifyPopoverProps) => {
  const { data, loading } = useQuery<DevicesResponse>(LOAD_DEVICES)
  const [ isOpen, setIsOpen ] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  const devices = data?.devices || []
  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onOpen={open}
      onClose={close}>
      <PopoverTrigger>
        <Button
          leftIcon={ <FaSpotify/> }
          isLoading={ loading }
          loadingText={ TEXT_BUTTON }
          borderRadius="lg"
          size="md"
          fontSize="1rem"
          fontWeight="400"
          colorScheme="spotify">
          { TEXT_BUTTON }
        </Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Spotify Active Devices</PopoverHeader>
        <PopoverBody>
          <List spacing={3}>
            {devices.map(({ name, id}) =>
              <DeviceListItem
                key={id}
                name={name}
                deviceId={id}
                genreId={genreId}
                onClose={close}/>
            )}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
})
