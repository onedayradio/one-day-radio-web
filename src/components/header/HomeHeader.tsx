import React from 'react'
import { Flex } from '@chakra-ui/react'
import { MainHeaderBox } from './MainHeaderBox'

const HomeHeaderComponent = () => {
  return (
    <Flex align="center" justifyContent="center" bg="dark.200" zIndex={1} w="100%" h="78px">
      <MainHeaderBox />
    </Flex>
  )
}

export const HomeHeader = React.memo(HomeHeaderComponent)
