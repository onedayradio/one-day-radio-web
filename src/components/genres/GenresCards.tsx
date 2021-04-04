import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Children } from '../../shared'

interface GenresCardsProps {
  children: Children
}

export const GenresCardsComponent = ({ children }: GenresCardsProps) => {
  return (
    <Flex direction="row" wrap="wrap" backgroundColor="dark.200">
      {children}
    </Flex>
  )
}

export const GenresCards = React.memo(GenresCardsComponent)
