import React from 'react'
import { Flex } from '@chakra-ui/react'
import { MainHeaderBox } from './MainHeaderBox'

const HeaderComponent = () => {
  return (
    <Flex align="center" justifyContent="center" bg="dark.200" zIndex={1} w="100%" h="125px">
      <MainHeaderBox />
    </Flex>
  )
}

export const Header = React.memo(HeaderComponent)
