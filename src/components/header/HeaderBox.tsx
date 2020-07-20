import React from 'react'
import { Box, Image } from '@chakra-ui/core'

import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'

export const HeaderBox = React.memo(() => {
  return (
    <Box position="relative">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image src={logoImage} zIndex={1} w={'50%'}/>
        </Link>
    </Box>
  )
})
