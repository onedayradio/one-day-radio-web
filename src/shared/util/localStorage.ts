export const removeToken = () => localStorage.removeItem('oneDayRadioToken')

export const getToken = () => localStorage.getItem('oneDayRadioToken')

const setToken = (token: string | undefined, tokenName: string) => {
  if (token) {
    localStorage.setItem(tokenName, token)
  } else {
    removeToken()
  }
}

export const storeToken = (token: string | undefined) => {
  setToken(token, 'oneDayRadioToken')
}
