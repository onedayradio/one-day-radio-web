import React from 'react'
import { Flex } from '@chakra-ui/react'

import { User } from '../../shared'
import { UserMenu } from './UserMenu'
import { HeaderBox } from './HeaderBox'

interface HeaderProps {
  user: User
}

export const HeaderWithUser = React.memo(({ user }: HeaderProps) => {
  return (
    <Flex
      boxShadow="dark-lg"
      position="fixed"
      justify="center"
      direction="row"
      align="center"
      bg="dark.200"
      width="100%"
      height={55}
      zIndex={1}
    >
      <HeaderBox />
      <UserMenu currentUser={user} />
    </Flex>
  )
})
