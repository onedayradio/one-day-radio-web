import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { Button, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
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
        toastsHelper.showInfoToast(
          'Please open your favorite Spotify device and try again :)',
          toast,
        )
      } else {
        toastsHelper.showWarningToast(error, toast)
      }
    }
  }

  return (
    <Button
      height={10}
      marginLeft={3}
      leftIcon={<FaRegPlayCircle />}
      isLoading={loading}
      iconSpacing={[0, 2]}
      borderRadius="lg"
      fontSize={16}
      padding={[0, 4]}
      fontWeight="400"
      colorScheme="spotify"
      onClick={() => onPlay()}
    >
      {isMobile ? '' : 'Play on Spotify'}
    </Button>
  )
}

export const PlayOnSpotifyButton = React.memo(PlayOnSpotifyButtonComponent)
