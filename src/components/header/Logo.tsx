import React from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'

interface LogoProps {
  logoImageWidth: {
    base: number | string
    lg: number
  }
}

export const Logo = React.memo(({ logoImageWidth }: LogoProps) => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1.8rem' }}>
      <Image src={logoImage} width={logoImageWidth} />
    </Link>
  )
})
