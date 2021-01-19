import React from 'react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import {
  Avatar,
  Box,
  PopoverBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Text,
} from '@chakra-ui/react'
import { User, authUtil } from '../../shared'

interface UserMenuProps {
  currentUser: User
}

export const UserMenu = React.memo(({ currentUser }: UserMenuProps) => {
  const avatarSize = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <Box position="absolute" right={[7, 40]}>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box cursor="pointer">
            <Avatar
              name={currentUser.displayName}
              src={currentUser.profileImageUrl}
              size={avatarSize}
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent color="fontColor.200" width={90} cursor="pointer">
          <PopoverArrow right={5} />
          <PopoverBody onClick={authUtil.signOut} color="red">
            <Text>Log out</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
})
