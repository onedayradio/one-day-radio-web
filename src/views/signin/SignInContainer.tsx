import React from 'react'
import { Flex } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import { Footer, HomeHeader, MainBanner, LoginBox } from '../../components'

const backgroundImage = isMobile ? "url('/home-mobil.jpg')" : "url('/home-desktop.jpg')"

export default () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      align="center"
      bgImage={backgroundImage}
      backgroundRepeat="round"
      h={['100%', 'auto']}
    >
      <HomeHeader />
      <MainBanner />
      <LoginBox />
      <Footer />
    </Flex>
  )
}
