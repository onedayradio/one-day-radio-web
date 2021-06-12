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
  const avatarSize = useBreakpointValue({ base: 'sm' })

  return (
    <Box position="absolute" right={[7, 40]}>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box cursor="pointer">
            <Avatar
              name={currentUser.displayName}
              src={currentUser.profileImageUrl}
              size={avatarSize}
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          color="fontColor.200"
          width="90px"
          cursor="pointer"
          backgroundColor="dark.200"
          right={['4px', 0]}
        >
          <PopoverArrow backgroundColor="dark.200" left={[0, '-26px']} />
          <PopoverBody onClick={authUtil.signOut} color="red">
            <Text color="fontColor.200">Log out</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
})
