import React from 'react'
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
} from '@chakra-ui/core'
import { useQuery } from '@apollo/client'
import { DevicesResponse, LOAD_DEVICES } from '../../shared'
import { DeviceListItem } from '..'

const TEXT_BUTTON = 'Listen on Spotify'

const onDeviceClick = (deviceId: string) => {
  console.log('Device id: ', deviceId)
}

export const ListenOnSpotifyPopover = React.memo(() => {
  const { data, loading } = useQuery<DevicesResponse>(LOAD_DEVICES)
  const devices = data?.devices || []
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          leftIcon={ FaSpotify }
          isLoading={ loading }
          loadingText={ TEXT_BUTTON }
          borderRadius="lg"
          size="md"
          fontSize="1rem"
          fontWeight="400"
          variantColor="spotify">
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
              <DeviceListItem key={id} name={name} id={id} onClick={onDeviceClick}/>
            )}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
})
