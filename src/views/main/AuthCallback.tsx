import React from 'react'

import { useQueryString, localStorageUtil } from '../../shared'

export default () => {
  const [token] = useQueryString('token')
  if (token) {
    localStorageUtil.storeToken(token as string)
    setTimeout(() => {
      window.location.href = '/genres'
    }, 1000)
  }
  return <div></div>
}
