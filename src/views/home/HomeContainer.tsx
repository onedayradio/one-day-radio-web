import React from 'react'
import { Box } from '@chakra-ui/core'
import { isMobile } from 'react-device-detect'
import { Footer } from '../../components/footer/Footer'
import { LoginBox } from './LoginBox'
import { HomeBox } from './HomeBox'

const backgroundImage = isMobile ? "url('/home-mobil.jpg')" : "url('/home-desktop.jpg')"

export const HomeContainer = React.memo(() => {
  return <Box bgImage={backgroundImage} backgroundRepeat="round" pos="relative" h="100vh">
      <HomeBox></HomeBox>
      <LoginBox></LoginBox>
      <Footer></Footer>
  </Box>
})
