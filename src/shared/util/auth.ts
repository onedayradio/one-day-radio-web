import { getToken, removeToken } from './localStorage'

export const getBearerToken = () => {
  const token = getToken()
  return token ? `bearer ${token}` : null
}

export const signOut = () => {
  removeToken()
  window.location.href = '/'
}
