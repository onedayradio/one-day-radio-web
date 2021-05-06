import React, { useEffect } from 'react'
import { Box, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { Footer } from '../../components/footer/Footer'
import { LoginBox } from './LoginBox'
import { HomeBox } from './HomeBox'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'

const backgroundImage = isMobile ? "url('/home-mobil.jpg')" : "url('/home-desktop.jpg')"

const getLocationState = ({ history }: any) => history?.location?.state

const displayAuthWarning = ({ toast, history }: any) => {
  const locationState = getLocationState({ history })
  const error = locationState?.error
  if (error) {
    toast({
      title: error.code,
      description: error.description,
      status: 'warning',
      duration: 9000,
      isClosable: true,
    })
  }
}

// eslint-disable-next-line react/display-name
export default () => {
  const history = useHistory()
  const toast = useToast()
  useEffect(() => {
    displayAuthWarning({ toast, history })
  }, [toast, history])

  return (
    <Box bgImage={backgroundImage} backgroundRepeat="round" pos="relative" h="100vh">
      <Header />
      <HomeBox />
      <LoginBox />
      <Footer />
    </Box>
  )
}
