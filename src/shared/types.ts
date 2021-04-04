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
  playlistId: string
}

export interface GenresResponse {
  genres: Genre[]
}

export interface GenreResponse {
  genre: Genre
}

export interface Song {
  id: string
  name: string
  spotifyId: string
  spotifyUri: string
  artistSpotifyIds: string
  artistsNames: string
  albumSpotifyId: string
  albumName: string
  albumImage300: string
}

export interface Playlist {
  id: number
  name: string
  description: string
  spotifyId: string
  genreId: number
}

export interface LoadPlaylistResponse {
  playlist: Playlist
}

export interface PlaylistSongsResponse {
  playlistSongs: PlaylistSong[]
}

export interface AddSongToPlaylistResponse {
  playlistSong: PlaylistSong
}

export interface PlaylistSong {
  active: boolean
  sharedBy?: User
  sharedOn: string
  song: Song
}

export interface Device {
  id: string
  name: string
}

export interface DevicesResponse {
  devices: Device[]
}
