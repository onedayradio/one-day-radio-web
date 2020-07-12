import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/core'
import { isMobile } from 'react-device-detect'

import { Genre } from '../../shared'
import { genreIcons } from './genreIcons'

interface GenreCardProps {
  genre: Genre
}

const BASE_IMAGES_MOBILE_URL = 'https://one-day-radio-assets.s3.amazonaws.com/web-genres/mobile'
const BASE_IMAGES_DESKTOP_URL = 'https://one-day-radio-assets.s3.amazonaws.com/web-genres/desktop'

export const GenreCard = React.memo(({ genre }: GenreCardProps) => {
  const baseImageUrl = isMobile ? BASE_IMAGES_MOBILE_URL : BASE_IMAGES_DESKTOP_URL
  const genreName = genre.name
    .toLocaleLowerCase()
    .replace(/ /g, '')
    .replace(/ñ/g, 'n')
    .replace(/&/g, '')
  return (
    <Flex
      cursor="pointer"
      direction="column"
      backgroundImage={`url(${baseImageUrl}-${genreName}.jpg)`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      justifyContent="center"
      justify="center"
      align="center"
      height={{ base: '190px', md: '330px' }}
      width={{ base: '50%', lg: '33.33%' }}
    >
      <Image src={(genreIcons as any)[genreName]} height={{ base: '55px', md: '95px' }} />
      <Text>{genre.name}</Text>
    </Flex>
  )
})