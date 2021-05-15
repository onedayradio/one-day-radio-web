import React, { useEffect, useState } from 'react'
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
  useToast,
} from '@chakra-ui/react'
import { useLazyQuery } from '@apollo/client'
import { DevicesResponse, LOAD_DEVICES, localStorageUtil, toastsHelper } from '../../shared'
import { DeviceListItem } from '..'

const TEXT_BUTTON = 'Devices'

interface loadDevicesResponse {
  devices: any
}

const DevicesPopoverComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  const toast = useToast()

  const onCompleted = ({ devices }: loadDevicesResponse) => {
    if (!devices.length) {
      setIsOpen(false)
      toastsHelper.showWarningToast(
        {
          title: 'We cannot find open devices',
          description: 'Please open Spotify in one of your devices',
        },
        toast,
      )
    }
  }
  const [loadDevices, { loading, data }] = useLazyQuery<DevicesResponse>(LOAD_DEVICES, {
    fetchPolicy: 'no-cache',
    onCompleted,
  })

  const open = async () => {
    await loadDevices()
    setIsOpen(!isOpen)
  }
  const close = () => setIsOpen(false)
  const selectDevice = (deviceId: string) => setSelectedDeviceId(deviceId)

  const devices = data?.devices || []

  useEffect(() => {
    loadDevices()
    const deviceId = localStorageUtil.getDeviceId()
    deviceId && setSelectedDeviceId(deviceId)
  }, [loadDevices])

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
            {devices?.map(({ name, id }) => (
              <DeviceListItem
                key={id}
                name={name}
                deviceId={id}
                onClose={close}
                onSelectDevice={selectDevice}
                selected={selectedDeviceId === id}
              />
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export const DevicesPopover = React.memo(DevicesPopoverComponent)
