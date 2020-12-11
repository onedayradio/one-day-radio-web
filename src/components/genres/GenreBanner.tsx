import React from 'react'
import { Text, Image, Box } from '@chakra-ui/react'
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
const DEFAULT_HEIGHT = { base: '190px', md: '330px' }
const DEFAULT_WIDTH = { base: '50%', lg: '33.33%' }

const GenreBannerComp = ({
  genre,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: GenreCardProps) => {
  const baseImageUrl = isMobile ? BASE_IMAGES_MOBILE_URL : BASE_IMAGES_DESKTOP_URL
  const genreName = genre?.name
    .toLocaleLowerCase()
    .replace(/ /g, '')
    .replace(/ñ/g, 'n')
    .replace(/&/g, '')
    || ''
  return (
    <Box
      backgroundImage={`url(${baseImageUrl}-${genreName}.jpg)`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      justifyContent="center"
      height={height}
      width={width}
    >
      <Image
        src={(genreIcons as any)[genreName]}
        height={{ base: '55px', md: '95px' }}
        margin='auto'/>
      <Text
        textAlign='center'
        fontSize="6xl"
      >{genreName}</Text>
    </Box>
  )
}

export const GenreBanner = React.memo(GenreBannerComp)
