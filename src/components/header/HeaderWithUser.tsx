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
      position="fixed"
      justify="center"
      boxShadow="dark-lg"
      direction="row"
      align="center"
      bg="dark.200"
      zIndex={1}
      w="100%"
      h={[55, 78]}
    >
      <HeaderBox/>
      <UserMenu currentUser={user} />
    </Flex>
  )
})
