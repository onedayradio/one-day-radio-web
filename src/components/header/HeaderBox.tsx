import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import curve from '../../assets/logo-cont-curva-small.svg'

export const HeaderBox = React.memo(() => {
  return (
    <Box
      position="absolute"
      boxShadow={['none', 'dark-lg']}
      bg="dark.200"
      w={[140, 250]}
      h={[55, 100]}
      left={[7, 40]}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundImage: `url(${curve})`,
        backgroundRepeat: 'no-repeat',
        bottom: '-35px',
        width: '100%',
        height: '50px',
        visibility: { base: 'hidden', md: 'visible' },
      }}
    >
      <Box position="absolute" top={['20%', '34%']} w="100%">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={logoImage} zIndex={1} w={['100%', '72%']} />
        </Link>
      </Box>
    </Box>
  )
})
