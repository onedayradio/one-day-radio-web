import React from 'react'
import { Flex } from '@chakra-ui/react'

import { User } from '../../shared'
import { UserMenu } from './UserMenu'
import { HeaderBox } from './HeaderBox'

interface HeaderProps {
  user?: User
}

const HeaderComponent = ({ user }: HeaderProps) => {
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
      {user && <UserMenu currentUser={user} />}
    </Flex>
  )
}

export const Header = React.memo(HeaderComponent)
