import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { User } from '../../shared'
import { UserMenu } from './UserMenu'

interface HeaderProps {
  user: User
}

export const HeaderWithUser = React.memo(({ user }: HeaderProps) => {
  return (
    <Flex direction="row" justify="center" align="center">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        w={{ base: '100%', lg: 1000 }}
        my="4"
        mx={{ base: 4, lg: 'auto' }}
      >
        <Logo logoImageWidth={{ base: 110, lg: 325 }} />
        <UserMenu currentUser={user} />
      </Flex>
    </Flex>
  )
})
