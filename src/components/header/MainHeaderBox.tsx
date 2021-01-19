import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import curve from '../../assets/logo-cont-curva.svg'

export const MainHeaderBox = React.memo(() => {
  return (
    <Box
      position="relative"
      boxShadow="dark-lg"
      bg="dark.200"
      w={['100%', 375]}
      h={[200, 150]}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundImage: `url(${curve})`,
        backgroundRepeat: 'no-repeat',
        bottom: '-40px',
        width: '100%',
        height: '50px',
      }}
    >
      <Box position="absolute" top="57%" w="100%">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={logoImage} zIndex={1} w={['75%', '60%']} />
        </Link>
      </Box>
    </Box>
  )
})
