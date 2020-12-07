import React from 'react'
import {
  Avatar,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/react'
import { User, authUtil } from '../../shared'

interface UserMenuProps {
  currentUser: User
}

export const UserMenu = React.memo(({ currentUser }: UserMenuProps) => {
  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Flex
          direction="row"
          align="center"
          cursor="pointer"
          alignContent="center"
          justify="center"
        >
          <Avatar name={currentUser.displayName} src={currentUser.profileImageUrl} size="md" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent w="90px" p="2">
        <PopoverArrow />
        <Text textAlign="center" cursor="pointer" onClick={authUtil.signOut}>
          Log Out
        </Text>
      </PopoverContent>
    </Popover>
  )
})
