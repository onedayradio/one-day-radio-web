import React, { useState, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { isMobile } from 'react-device-detect'
import { Box, Flex, InputGroup, Input, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { PlayOnSpotifyButton } from './PlayOnSpotifyButton'

interface SearchBarProps {
  onSearch: any
  playlistId: number
  genreId: number
}

const SearchBarComponent = ({ onSearch, playlistId, genreId }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText)
    }, 900)

    return () => clearTimeout(timer)
  }, [searchText, onSearch])

  return (
    <Box marginBottom={4}>
      <Box
        backgroundColor="dark.200"
        boxShadow="dark-lg"
        border={14}
        borderColor="dark.200"
        borderStyle="solid"
        borderRadius="lg"
        width={['92%', '70%']}
        margin="auto"
      >
        <Flex>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="fontColor.500" />
            </InputLeftElement>
            <Input
              onChange={(e: any) => setSearchText(e.target.value)}
              _placeholder={{ color: 'fontColor.500' }}
              focusBorderColor="fontColor.300"
              placeholder={isMobile ? 'Search' : "Search for a song to add into the playlist"}
              backgroundColor="white"
              color="fontColor.600"
              value={searchText}
              borderRadius="lg"
            />
            <InputRightElement marginRight={1}>
              <FaTimes
                style={{ cursor: 'pointer', visibility: searchText ? 'visible' : 'hidden' }}
                onClick={() => setSearchText('')}
                color="fontColor.500"
              />
            </InputRightElement>
          </InputGroup>
          <PlayOnSpotifyButton playlistId={playlistId} genreId={genreId} />
        </Flex>
      </Box>
    </Box>
  )
}

export const SearchBar = React.memo(SearchBarComponent)
