import React, { useEffect } from 'react'
import { DarkMode, useToast, IToast } from '@chakra-ui/react'

import { Header, HeaderWithUser } from '../../components'
import { useQueryString, localStorageUtil } from '../../shared'
import { AppRoutes } from './AppRoutes'
import { TokenValidator } from './TokenValidator'
import { useStoreState } from '../../core'

const AUTH_ERROR_TOAST: IToast = {
  title: 'Unexpected error signing in!',
  status: 'error',
  isClosable: true,
}

export const AppContainer = () => {
  const toast = useToast()
  const currentUser = useStoreState((state) => state.currentUser.user)
  const [authError, setAuthError] = useQueryString('authError')
  const token = localStorageUtil.getToken()
  useEffect(() => {
    if (authError) {
      toast(AUTH_ERROR_TOAST)
      setAuthError(undefined)
    }
  }, [authError]) // eslint-disable-line
  return (
    <DarkMode>
      {token && <TokenValidator />}
      {currentUser && <HeaderWithUser user={currentUser} />}
      <AppRoutes />
    </DarkMode>
  )
}
