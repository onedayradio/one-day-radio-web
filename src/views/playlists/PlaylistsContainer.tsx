import React from 'react'
import { useQuery } from '@apollo/client'

import { GenresCarousel, GenreCard, QueryResponseWrapper } from '../../components'
import { GenresResponse, LOAD_ALL_GENRES } from '../../shared'

interface PlaylistsContainerProps {
  genreId: string
}

export const PlaylistsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  console.log('Playlists container, genreId: ', genreId)
  const { data, error, loading } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  const genres = data?.genres || []
  return (
    <div>
      <span>Playlists container will be here</span>
      <QueryResponseWrapper loading={loading} error={error}>
        <GenresCarousel>
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              genre={genre}
              width="100%"
              height="330px"
              onClick={() => console.log('genre clicked')}
            />
          ))}
        </GenresCarousel>
      </QueryResponseWrapper>
    </div>
  )
})
