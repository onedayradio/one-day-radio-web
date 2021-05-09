import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { Children } from '../../shared'

interface GenresCardsProps {
  children: Children
  title?: string
}

export const GenresCardsComponent = ({ children, title }: GenresCardsProps) => {
  return (
    <Flex direction="column" justifyContent="center" align="center" bg="dark.200">
      {title && (
        <Text
          textTransform="uppercase"
          color="fontColor.200"
          fontSize="0.9rem"
          fontWeight="600"
          py={4}
        >
          {title}
        </Text>
      )}
      <Flex justifyContent="center" direction="row" wrap="wrap" backgroundColor="dark.200">
        {children}
      </Flex>
    </Flex>
  )
}

export const GenresCards = React.memo(GenresCardsComponent)
