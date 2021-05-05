import React, { useState, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Spacer,
} from '@chakra-ui/react'
import { DevicesPopover } from '../device/DevicesPopover'
import { PlayOnSpotifyButton } from './PlayOnSpotifyButton'

interface SearchBarProps {
  onSearch: any
  playlistId: number
}

const SearchBarComponent = ({ onSearch, playlistId }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText)
    }, 900)

    return () => clearTimeout(timer)
  }, [searchText, onSearch])

  return (
    <Box position="relative" top={-30} height={36}>
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
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="fontColor.500" />
            </InputLeftElement>
            <Input
              onChange={(e: any) => setSearchText(e.target.value)}
              _placeholder={{ color: 'fontColor.500' }}
              focusBorderColor="fontColor.300"
              placeholder="Search for a song"
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
        </Box>
      </Box>
      <Flex width={['92%', '70%']} margin="auto">
        <PlayOnSpotifyButton playlistId={playlistId} />
        <Spacer />
        <DevicesPopover playlistId={playlistId} />
      </Flex>
    </Box>
  )
}

export const SearchBar = React.memo(SearchBarComponent)
