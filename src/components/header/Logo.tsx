import React from 'react'
import { Flex, Image } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'

interface LogoProps {
  logoImageWidth: {
    base: number
    lg: number
  }
}

export const Logo = React.memo(({ logoImageWidth }: LogoProps) => {
  return (
    <Flex direction="row" align="center" justify="center" cursor="pointer">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={logoImage} width={logoImageWidth} />
      </Link>
    </Flex>
  )
})
