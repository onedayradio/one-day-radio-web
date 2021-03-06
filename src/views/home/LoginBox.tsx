import React from 'react'
import { Box, Center, Divider, Text } from '@chakra-ui/react'
import { SignInButton } from '../../components'

const onSignInWithSpotify = () => {
  const url = `${process.env.REACT_APP_API_URL}/spotify/auth`
  window.location.href = url
}

const LoginBoxComponent = () => {
  return (
    <Box pos="absolute" bottom={50} fontWeight="300" w="100%" textAlign="center">
      <Center bg={['none', 'dark.200']} height="40vh">
        <Box
          borderWidth={['none', '1px']}
          width={['100%', '60%']}
          borderColor="fontColor.200"
          borderRadius="lg"
          paddingBottom="1rem"
          paddingTop="1rem"
          height="11rem"
        >
          <Text
            display={['none', 'block']}
            textTransform="uppercase"
            color="fontColor.200"
            fontSize="0.9rem"
            fontWeight="600"
            py={4}
          >
            Enjoy the best music community
          </Text>
          <Divider
            borderColor="fontColor.200"
            display={['none', 'block']}
            width={['40%', '20%']}
            margin="auto"
          />
          <Box paddingTop={['18%', '1.5rem']} pb="1%">
            <Text
              display={['block', 'none']}
              color="fontColor.200"
              fontWeight="400"
              fontSize="2rem"
              py={4}
            >
              Sign in
            </Text>
            <SignInButton onClick={onSignInWithSpotify} />
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export const LoginBox = React.memo(LoginBoxComponent)
