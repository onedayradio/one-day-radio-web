import React from 'react'
import { Flex } from '@chakra-ui/react'
import { HeaderBox } from './HeaderBox'

export const Header = React.memo(() => {
  return (
    <Flex
      position="absolute"
      justify="center"
      boxShadow="dark-lg"
      direction="row"
      align="center"
      bg="dark.200"
      zIndex={1}
      w="100%"
      h={78}
    >
      <HeaderBox></HeaderBox>
    </Flex>
  )
})
