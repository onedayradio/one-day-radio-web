import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { Button } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { PLAY_ON_DEVICE } from '../../shared'

interface PlayOnSpotifyProps {
  playlistId: number
}

const onPlay = async (playOnDevice: any, { playlistId }: PlayOnSpotifyProps) => {
  await playOnDevice({
    variables: {
      playlistId,
    },
  })
}

const PlayOnSpotifyButtonComponent = ({ playlistId }: PlayOnSpotifyProps) => {
  const [playOnDevice, { loading }] = useMutation(PLAY_ON_DEVICE)
  return (
    <Button
      height={[9, 10]}
      leftIcon={<FaSpotify />}
      isLoading={loading}
      iconSpacing={[1, 2]}
      borderRadius="lg"
      fontSize={15}
      fontWeight="400"
      colorScheme="spotify"
      onClick={() => onPlay(playOnDevice, { playlistId })}
    >
      Play on Spotify
    </Button>
  )
}

export const PlayOnSpotifyButton = React.memo(PlayOnSpotifyButtonComponent)
