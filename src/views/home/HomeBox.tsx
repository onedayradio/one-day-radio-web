import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/core'

export const HomeBox = React.memo(() => {
  return (
    <Box pos="absolute" top="35%" w="100%" textAlign="center">
      <Text fontSize="4xl" fontWeight="600" textTransform="uppercase">New Music Everyday</Text>
      <Divider borderColor="white" w={["40%", "20%"]} m="auto"/>
      <Text fontSize="0.9rem" fontWeight="600" py={4} textTransform="uppercase">From you, from the community</Text>
    </Box>
  )
})
