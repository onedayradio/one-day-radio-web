export type Children =
  | (JSX.Element | undefined | null | boolean | string | number)[]
  | (JSX.Element | undefined | null | boolean | string | number)

export interface RouteLocation {
  search: string
  pathname: string
}

export interface User {
  id?: string
  firstname: string
  lastname: string
  email: string
  displayName: string
  countryCode: string
  profileImageUrl: string
}

export interface LoadAuthUserResponse {
  user: User
}

export interface Genre {
  id: string
  name: string
}

export interface GenresResponse {
  genres: Genre[]
}

export interface GenreResponse {
  genre: Genre
}

export interface Image {
  url: string
  width: number
  height: number
}

export interface Album {
  id: string
  name: string
  images: Image[]
}

export interface Song {
  id: string
  name: string
  sharedBy: string
  artists: string
  album: Album
}

export interface PlaylistSongsResponse {
  loadPlaylistSongs: PlaylistSongs
}

export interface PlaylistSongs {
  songs: Song[]
  total: number
  perPage: number
  lastPage: number
  currentPage: number
  from: number
  last: number
}
