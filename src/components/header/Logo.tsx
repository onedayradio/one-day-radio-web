import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/core'
import { FaMusic } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Logo = React.memo(() => {
  return (
    <Flex direction="row" align="center" justify="center" cursor="pointer">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box as={FaMusic} />
        <Text pl="2">One Day Radio</Text>
      </Link>
    </Flex>
  )
})
