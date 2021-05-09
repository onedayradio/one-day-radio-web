import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { LOAD_ALL_GENRES, GenresResponse, Genre } from '../../shared'
import { QueryResponseWrapper, GenresCards, GenreCard, Header } from '../../components'
import { GenresBannerMobile } from './GenresBannerMobile'
import { GenresBannerDesktop } from './GenresBannerDesktop'
import { useStoreState } from '../../core'

// eslint-disable-next-line react/display-name
export default () => {
  const currentUser = useStoreState((state) => state.currentUser.user)
  const history = useHistory()
  const { data, error, loading } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  const genres = data?.genres || []

  const onGenreClick = (genre: Genre) => {
    history.push(`/genre/${genre.id}/playlist/${genre.playlistId}`)
  }

  return (
    <Flex height="100%" flexDirection="column">
      <Header user={currentUser} />
      <QueryResponseWrapper loading={loading} error={error}>
        <GenresBannerMobile />
        <GenresBannerDesktop />
        <GenresCards>
          {genres.map((genre) => (
            <GenreCard
              height={[100, 250]}
              width={['50%', '33.33%']}
              key={genre.id}
              genre={genre}
              onClick={onGenreClick}
            />
          ))}
        </GenresCards>
      </QueryResponseWrapper>
    </Flex>
  )
}
