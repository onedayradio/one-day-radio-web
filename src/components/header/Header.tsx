import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Logo } from './Logo'
import { Children } from '../../shared'

interface HeaderProps {
  children: Children
}

export const Header = React.memo(({ children }: HeaderProps) => {
  return (
    <Flex direction="row" justify="space-between" p="4" align="center">
      <Logo />
      {children}
    </Flex>
  )
})
