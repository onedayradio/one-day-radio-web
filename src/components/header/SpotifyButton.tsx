import React from 'react'
import { Button } from '@chakra-ui/core'
import { FaSpotify } from 'react-icons/fa'

interface SpotifyButtonProps {
  onClick: () => void
}

export const SpotifyButton = React.memo(({ onClick }: SpotifyButtonProps) => {
  return (
    <Button leftIcon={FaSpotify} onClick={onClick}>
      Sign in With Spotify
    </Button>
  )
})
