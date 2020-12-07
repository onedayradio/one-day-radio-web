import React from 'react'

import { useQueryString, localStorageUtil } from '../../shared'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
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
