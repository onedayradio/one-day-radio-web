import React from 'react'
import { Button } from '@chakra-ui/core'
import { FaSpotify } from 'react-icons/fa'

interface SpotifyButtonProps {
  onClick: () => void
}

export const SpotifyButton = React.memo(({ onClick }: SpotifyButtonProps) => {
  return (
    <Button
      leftIcon={FaSpotify}
      borderRadius="lg"
      size="lg"
      fontSize="1.2rem"
      fontWeight="400"
      variantColor="spotify"
      onClick={onClick}>
        Sign in With Spotify
    </Button>
  )
})
