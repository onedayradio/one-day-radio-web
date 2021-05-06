import React from 'react'
import { Flex } from '@chakra-ui/react'
import { MainHeaderBox } from './MainHeaderBox'

const HeaderComponent = () => {
  return (
    <Flex
      position="absolute"
      justify="center"
      direction="row"
      align="center"
      bg="dark.200"
      zIndex={1}
      w="100%"
      h={78}
    >
      <MainHeaderBox />
    </Flex>
  )
}

export const Header = React.memo(HeaderComponent)
