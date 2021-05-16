import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { Button, useToast } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router'

import { afterLoginHelper, PLAY_ON_DEVICE, toastsHelper } from '../../shared'
import { useStoreState } from '../../core'

interface PlayOnSpotifyProps {
  playlistId: number
  genreId: number
}

const PlayOnSpotifyButtonComponent = ({ playlistId, genreId }: PlayOnSpotifyProps) => {
  const toast = useToast()
  const history = useHistory()
  const selectedDeviceId = useStoreState((state) => state.selectedDevice.deviceId)
  const currentUser = useStoreState((state) => state.currentUser.user)
  const [playOnDevice, { loading }] = useMutation(PLAY_ON_DEVICE)

  const onPlay = async () => {
    if (!currentUser) {
      afterLoginHelper.storeAfterLoginAction({
        route: `genre/${genreId}/playlist/${playlistId}`,
        action: afterLoginHelper.Actions.PLAY_SONG,
      })
      toastsHelper.showInfoToast('Login is required to continue', toast)
      history.push('/signIn')
      return
    }
    try {
      await playOnDevice({
        variables: {
          playlistId,
          spotifyDeviceId: selectedDeviceId,
        },
      })
    } catch (error) {
      if (error.message === 'Resource not found') {
        toastsHelper.showInfoToast('Please select a spotify device and try again :)', toast)
      } else {
        toastsHelper.showWarningToast(error, toast)
      }
    }
  }

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
      onClick={() => onPlay()}
    >
      Play on Spotify
    </Button>
  )
}

export const PlayOnSpotifyButton = React.memo(PlayOnSpotifyButtonComponent)
