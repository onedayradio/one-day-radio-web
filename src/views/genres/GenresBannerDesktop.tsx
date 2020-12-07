import React from 'react'
import { Flex, Heading, Divider } from '@chakra-ui/react'

import bannerImage from '../../assets/genres-page-banner.jpg'

export const GenresBannerDesktop = React.memo(() => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="500px"
      display={{ base: 'none', lg: 'flex' }}
      backgroundImage={`url(${bannerImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Heading as="h4" size="md" textAlign="center">
        Select the genre you want to hear!
      </Heading>
      <Divider width="100%" />
    </Flex>
  )
})
