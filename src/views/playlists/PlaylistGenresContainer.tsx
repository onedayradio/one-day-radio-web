import React from 'react'
import { useQuery } from '@apollo/client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { GenresCarousel, GenreCard, QueryResponseWrapper } from '../../components'
import { GenresResponse, LOAD_ALL_GENRES } from '../../shared'

export const PlaylistGenresContainer = React.memo(() => {
  const { data, error, loading } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  const genres = data?.genres || []
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      <Box marginTop={2}>
        <Flex
          height={5}
          backgroundColor=""
        >
          <Text>Other genres that may interest you</Text>
        </Flex>
        <GenresCarousel>
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              genre={genre}
              width="100%"
              height="100px"
              onClick={() => console.log('genre clicked')}
            />
          ))}
        </GenresCarousel>
      </Box>
    </QueryResponseWrapper>
  )
})
