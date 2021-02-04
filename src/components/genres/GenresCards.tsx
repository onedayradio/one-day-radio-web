import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Children } from '../../shared'

interface GenresCardsProps {
  children: Children
}

export const GenresCards = React.memo(({ children }: GenresCardsProps) => {
  return (
    <Flex direction="row" wrap="wrap" backgroundColor="dark.200">
      {children}
    </Flex>
  )
})
