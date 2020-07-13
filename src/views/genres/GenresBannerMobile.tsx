import React from 'react'
import { Box, Heading, Divider } from '@chakra-ui/core'

export const GenresBannerMobile = React.memo(() => {
  return (
    <Box display={{ base: 'flex', lg: 'none' }} style={{ flexDirection: 'column' }}>
      <Heading as="h4" size="md" textAlign="center">
        Select the genre you want to hear!
      </Heading>
      <Divider />
    </Box>
  )
})
