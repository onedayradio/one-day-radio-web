import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'

interface SpotifyButtonProps {
  onClick: () => void
}

const SpotifyButtonComponent = ({ onClick }: SpotifyButtonProps) => {
  return (
    <Button
      leftIcon={<FaSpotify />}
      borderRadius="lg"
      size="lg"
      fontSize="1.2rem"
      fontWeight="400"
      colorScheme="spotify"
      onClick={onClick}
    >
      Sign in With Spotify
    </Button>
  )
}

export const SpotifyButton = React.memo(SpotifyButtonComponent)
