import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'

import { localStorageUtil, LOAD_AUTH_USER, LoadAuthUserResponse } from '../../shared'
import { useStoreActions } from '../../core'

export const TokenValidator = React.memo(() => {
  const setCurrentUser = useStoreActions((dispatch: any) => dispatch.currentUser.setUser)
  const apolloClient = useApolloClient()
  const validateToken = async () => {
    try {
      const { data } = await apolloClient.query<LoadAuthUserResponse>({
        query: LOAD_AUTH_USER,
      })
      setCurrentUser(data?.user)
    } catch (error) {
      localStorageUtil.removeToken()
      setCurrentUser(null)
    }
  }
  useEffect(() => {
    validateToken()
  }, []) //eslint-disable-line
  return null
})
