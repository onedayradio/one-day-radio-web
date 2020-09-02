import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import {
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

interface DeviceListItemProps {
  id: string
  name: string
  onClick: (DeviceId: string) => void
}

export const DeviceListItem = React.memo(({ id, name, onClick }: DeviceListItemProps) => {
  return (
    <ListItem
      key={ id }
      cursor="pointer"
      _hover={{ bg: "dark.600" }}
      onClick={() => onClick(id)}>
      <ListIcon icon={BiPlayCircle} color="green.500" />
      { name }
    </ListItem>
  )
})
