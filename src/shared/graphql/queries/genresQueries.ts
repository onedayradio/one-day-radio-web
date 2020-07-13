import gql from 'graphql-tag'

import { genreInfoFull } from '../fragments/genresFragments'

export const LOAD_ALL_GENRES = gql`
  query loadAllGenres {
    genres: loadAllGenres {
      ...GenreInfoFull
    }
  }
  ${genreInfoFull}
`
