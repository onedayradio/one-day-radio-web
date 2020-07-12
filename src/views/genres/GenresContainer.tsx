import React from 'react'
import { useQuery } from '@apollo/client'

import { LOAD_ALL_GENRES, GenresResponse } from '../../shared'
import { QueryResponseWrapper, GenresCards } from '../../components'
import { GenresBannerMobile } from './GenresBannerMobile'
import { GenresBannerDesktop } from './GenresBannerDesktop'

export const GenresContainer = React.memo(() => {
  const { data, error, loading } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  return (
    <div>
      <QueryResponseWrapper loading={loading} error={error}>
        <GenresBannerMobile />
        <GenresBannerDesktop />
        <GenresCards genres={data?.genres || []} />
      </QueryResponseWrapper>
    </div>
  )
})
