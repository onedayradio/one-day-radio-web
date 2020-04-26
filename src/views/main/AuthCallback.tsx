import React from 'react'

import { useQueryString, localStorageUtil } from '../../shared'

export const AuthCallback = () => {
  const [token] = useQueryString('token')
  if (token) {
    localStorageUtil.storeToken(token as string)
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }
  return <div></div>
}
