import React from 'react'
import { Flex } from '@chakra-ui/core'
import { HeaderBox } from './HeaderBox'

export const Header = React.memo(() => {
  return (
    <Flex direction="row" zIndex={1} justify="center" align="center" h={80} w="100%" bg="dark.200" position="absolute">
      <HeaderBox></HeaderBox>
    </Flex>
  )
})
