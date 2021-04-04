import React from 'react'
import noAllowMusic from '../../assets/not-allow-music.svg'
import { Box, Center, Image, Text } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Center height="100%">
      <Box width="75%">
        <Image src={noAllowMusic} width={['50%', '20%']} margin={['auto']} />
        <Text
          fontSize={['2xl', '4xl']}
          fontWeight="600"
          textTransform="uppercase"
          color="fontColor.200"
          textAlign="center"
          marginTop={5}
        >
          Page not found ;(
        </Text>
      </Box>
    </Center>
  )
}
