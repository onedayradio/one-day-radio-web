import React from 'react'
import { Flex, Divider, Text, Box } from '@chakra-ui/react'

import bannerImage from '../../assets/genres-page-banner.jpg'

const GenresBannerDesktopComponent = () => {
  return (
    <Flex
      marginTop={55}
      direction="column"
      align="center"
      justify="center"
      display={{ base: 'none', lg: 'flex' }}
      backgroundImage={`url(${bannerImage})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      paddingY={32}
    >
      <Box w={['50%', '25%']} textAlign="center" margin="auto">
        <Text fontSize="4xl" fontWeight="600" textTransform="uppercase" color="fontColor.200">
          Select the genre you want to hear!
        </Text>
        <Divider width="50%" margin="auto" />
      </Box>
    </Flex>
  )
}

export const GenresBannerDesktop = React.memo(GenresBannerDesktopComponent)
