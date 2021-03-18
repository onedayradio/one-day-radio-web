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

export const LOAD_GENRE = gql`
  query loadGenre($genreId: Int) {
    genre: loadGenre(genreId: $genreId) {
      ...GenreInfoFull
    }
  }
  ${genreInfoFull}
`
