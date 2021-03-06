import React from 'react'
import { useQuery } from '@apollo/client'

import { Box, Flex, Text, Center, Divider } from '@chakra-ui/react'
import { GenresCarousel, GenreCard } from '../../components'
import { GenresResponse, LOAD_ALL_GENRES } from '../../shared'

export const PlaylistGenresContainerComponent = () => {
  const { data } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  const genres = data?.genres || []
  return (
    <Box display={['none', 'block']}>
      <Box marginTop={2}>
        <Flex height="4rem" backgroundColor="dark.600">
          <Center width="100%">
            <Box>
              <Text textAlign="center" color="fontColor.200" textTransform="uppercase">
                Other genres that may interest you
              </Text>
              <Divider />
            </Box>
          </Center>
        </Flex>
        <Box height="130px">
          <GenresCarousel>
            {genres.map((genre) => (
              <GenreCard
                key={genre.id}
                genre={genre}
                width="100%"
                height="130px"
                onClick={() => console.log('genre clicked')}
              />
            ))}
          </GenresCarousel>
        </Box>
      </Box>
    </Box>
  )
}

export const PlaylistGenresContainer = React.memo(PlaylistGenresContainerComponent)
