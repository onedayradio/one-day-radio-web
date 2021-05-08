import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { TokenValidator } from './TokenValidator'

import { useQueryString, localStorageUtil, afterLoginHelper } from '../../shared'

export default () => {
  const history = useHistory()
  const [token] = useQueryString('token')
  const [tokenReady, setTokenReady] = useState(false)
  const afterLoginAction = afterLoginHelper.getAfterLoginAction()
  localStorageUtil.storeToken(token as string)

  const doRedirect = () => {
    if (tokenReady) {
      return
    }
    setTokenReady(true)
    if (afterLoginAction) {
      history.push(afterLoginAction.route)
    } else {
      history.push('/genres')
    }
  }

  setTimeout(() => {
    doRedirect()
  }, 1000)
  return tokenReady ? <TokenValidator /> : <div></div>
}
