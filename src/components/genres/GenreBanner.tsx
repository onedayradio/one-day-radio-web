import React from 'react'
import { Center, Text, Image, Box } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import { Genre } from '../../shared'
import { genreIcons } from './genreIcons'

interface GenreCardProps {
  genre?: Genre
  width?: any
  height?: any
}

const BASE_IMAGES_MOBILE_URL = 'https://one-day-radio-assets.s3.amazonaws.com/web-genres/mobile'
const BASE_IMAGES_DESKTOP_URL = 'https://one-day-radio-assets.s3.amazonaws.com/web-genres/desktop'
const DEFAULT_HEIGHT = { base: '100px', md: '100px' }
const DEFAULT_WIDTH = { base: '50%', lg: '33.33%' }

const GenreBannerComp = ({
  genre,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: GenreCardProps) => {
  const baseImageUrl = isMobile ? BASE_IMAGES_MOBILE_URL : BASE_IMAGES_DESKTOP_URL
  const genreName =
    genre?.name.toLocaleLowerCase().replace(/ /g, '').replace(/ñ/g, 'n').replace(/&/g, '') || ''
  return (
    <Box
      backgroundImage={`url(${baseImageUrl}-${genreName}.jpg)`}
      paddingTop={55}
      backgroundSize="cover"
      backgroundPosition="center"
      width={width}
    >
      <Center height={height}>
        <Box>
          <Image
            src={(genreIcons as any)[genreName]}
            height={{ base: '60px', md: '90px' }}
            margin="auto"
          />
          <Text
            textTransform="uppercase"
            marginTop={[1, 2]}
            color="fontColor.200"
            textAlign="center"
            fontWeight="600"
            fontSize={['3xl', '5xl']}
          >
            {genreName}
          </Text>
        </Box>
      </Center>
    </Box>
  )
}

export const GenreBanner = React.memo(GenreBannerComp)
