import React from 'react'
import { Box, Divider, Center, Text } from '@chakra-ui/react'

export const GenresBannerMobile = React.memo(() => {
  return (
    <Box
      display={{ base: 'flex', lg: 'none' }}
      style={{ flexDirection: 'column' }}
      paddingTop={65}
      height={125}
      backgroundColor="dark.600"
    >
      <Center width="100%">
        <Box>
          <Text
            textAlign="center"
            fontSize="md"
            fontWeight="600"
            textTransform="uppercase"
            color="fontColor.200"
            width={250}
            margin="auto"
          >
            Select the genre you want to hear!
          </Text>
          <Divider width="50%" margin="auto" />
        </Box>
      </Center>
    </Box>
  )
})
