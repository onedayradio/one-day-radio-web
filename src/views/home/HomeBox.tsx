import React from 'react'
import { Divider, Flex, Text } from '@chakra-ui/react'

const HomeBoxComponent = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h={['auto', '500px']}
      textAlign="center"
      align="center"
      justifyContent="center"
    >
      <Text fontSize="4xl" fontWeight="600" textTransform="uppercase" color="fontColor.200">
        New Music Everyday
      </Text>
      <Divider borderColor="fontColor.200" w={['40%', '20%']} />
      <Text
        textTransform="uppercase"
        color="fontColor.200"
        fontSize="0.9rem"
        fontWeight="600"
        py={4}
      >
        From you, from the community
      </Text>
    </Flex>
  )
}

export const HomeBox = React.memo(HomeBoxComponent)
