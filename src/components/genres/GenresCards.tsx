import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Genre } from '../../shared'
import { GenreCard } from './GenreCard'

interface GenresCardsProps {
  genres: Genre[]
}

export const GenresCards = React.memo(({ genres }: GenresCardsProps) => {
  return (
    <Flex direction="row" wrap="wrap">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </Flex>
  )
})
