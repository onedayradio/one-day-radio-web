import React from 'react'
import { SpotifyButton } from '../../components'

const onSignInWithSpotify = () => {
  const url = `${process.env.REACT_APP_API_URL}/spotify/auth`
  window.location.href = url
}

export const HomeContainer = React.memo(() => {
  return (
    <div>
      <SpotifyButton onClick={onSignInWithSpotify} />
    </div>
  )
})
