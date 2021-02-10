import React from 'react'
import { useQuery } from '@apollo/client'

import { GenreBanner, QueryResponseWrapper } from '../../components'
import { GenreResponse, LOAD_GENRE } from '../../shared'

interface PlaylistGenreBannerProps {
  genreId: string
}

export const PlaylistGenreBannerContainer = React.memo(({ genreId }: PlaylistGenreBannerProps) => {
  const { data, error, loading } = useQuery<GenreResponse>(LOAD_GENRE, {
    variables: { genreId },
  })
  return (
    <QueryResponseWrapper loading={loading} error={error}>
      <GenreBanner genre={data?.genre} width="100%" height={280} />
    </QueryResponseWrapper>
  )
})
