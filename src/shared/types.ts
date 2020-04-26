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
