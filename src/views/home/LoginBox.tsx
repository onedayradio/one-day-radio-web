import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'
import { SpotifyButton } from '../../components'

const onSignInWithSpotify = () => {
  const url = `${process.env.REACT_APP_API_URL}/spotify/auth`
  window.location.href = url
}

export const LoginBox = React.memo(() => {
  return (
    <Box pos="absolute" bottom={50} fontWeight="300" w="100%" textAlign="center">
      <Box bg={['none', 'dark.200']} height="40vh" py="2%">
        <Box w={['100%', '60%']} margin="auto" borderRadius="lg" borderColor="white" border={['none', "1px"]} h="100%" py="1%">
          <Text fontSize="0.9rem" fontWeight="600" py={4} textTransform="uppercase" display={['none', 'block']}>Enjoy the best music community</Text>
          <Divider borderColor="white" w={["40%", "20%"]} m="auto" pt="1%" display={['none', 'block']}/>
          <Box pt={['40%', '1%']} pb="1%">
            <SpotifyButton onClick={onSignInWithSpotify}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
})
