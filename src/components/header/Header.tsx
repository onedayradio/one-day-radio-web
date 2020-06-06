import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Logo } from './Logo'

export const Header = React.memo(() => {
  return (
    <Flex direction="row" justify="center" py="4" align="center">
      <Logo logoImageWidth={{ base: 250, lg: 325 }} />
    </Flex>
  )
})
