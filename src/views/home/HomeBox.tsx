import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'

const HomeBoxComponent = () => {
  return (
    <Box pos="absolute" top="35%" w="100%" textAlign="center">
      <Text fontSize="4xl" fontWeight="600" textTransform="uppercase" color="fontColor.200">
        New Music Everyday
      </Text>
      <Divider borderColor="fontColor.200" w={['40%', '20%']} m="auto" />
      <Text
        textTransform="uppercase"
        color="fontColor.200"
        fontSize="0.9rem"
        fontWeight="600"
        py={4}
      >
        From you, from the community
      </Text>
    </Box>
  )
}

export const HomeBox = React.memo(HomeBoxComponent)
