import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import curve from '../../assets/logo-cont-curva.svg'

export const MainHeaderBoxComponent = () => {
  return (
    <Flex
      position="relative"
      boxShadow="dark-lg"
      direction="column"
      paddingTop="40px"
      align="center"
      justifyContent="center"
      bg="dark.200"
      w={['100%', 375]}
      h={[125, 150]}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundImage: `url(${curve})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        bottom: '-39px',
        width: '100%',
        height: '50px',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={logoImage} zIndex={1} w={['75%', '60%']} />
      </Link>
    </Flex>
  )
}

export const MainHeaderBox = React.memo(MainHeaderBoxComponent)
