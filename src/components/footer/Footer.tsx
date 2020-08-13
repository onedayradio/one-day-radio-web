import React from 'react'
import { Flex } from '@chakra-ui/core'

export const Footer = React.memo(() => {
  const footerText = `2020 @ One Day Radio ${process.env.REACT_APP_VERSION}`
  return (
    <Flex
      display={['none', 'flex']}
      textTransform="uppercase"
      justify="center"
      direction="row"
      align="center"
      pos="absolute"
      fontSize="sm"
      bg="dark.600"
      bottom={0}
      w="100%"
      h="50px"
    >
      {footerText}
    </Flex>
  )
})
