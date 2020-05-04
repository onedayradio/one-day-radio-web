import React from 'react'
import {
  Avatar,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/core'
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
          w="220px"
          alignContent="center"
          justify="center"
        >
          <Avatar name={currentUser.displayName} src={currentUser.profileImageUrl} size="md" />
          <Text ml="2" maxW="150px" isTruncated>
            {currentUser.displayName}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent w="220px" p="2">
        <PopoverArrow />
        <Text textAlign="center" cursor="pointer" onClick={authUtil.signOut}>
          Log Out
        </Text>
      </PopoverContent>
    </Popover>
  )
})
