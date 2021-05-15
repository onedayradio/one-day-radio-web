import React from 'react'
import { useQuery } from '@apollo/client'

import { GenreBanner } from '../../components'
import { GenreResponse, LOAD_GENRE } from '../../shared'

interface PlaylistGenreBannerProps {
  genreId: number
}

export const PlaylistGenreBannerContainer = React.memo(({ genreId }: PlaylistGenreBannerProps) => {
  const { data } = useQuery<GenreResponse>(LOAD_GENRE, {
    variables: { genreId },
  })
  return <GenreBanner genre={data?.genre} width="100%" height={[220, 390]} />
})
