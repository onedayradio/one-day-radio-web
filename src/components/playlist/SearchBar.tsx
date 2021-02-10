import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Box, Flex, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { ListenOnSpotifyPopover } from './ListenOnSpotifyPopover'

interface SearchBarProps {
  onSearch: any
  playlistId: number
}

export const SearchBar = React.memo(({ onSearch, playlistId }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText)
    }, 1000)

    return () => clearTimeout(timer)
  }, [searchText, onSearch])

  return (
    <Box position="relative" top={-30}>
      <Flex
        backgroundColor="dark.200"
        boxShadow="dark-lg"
        border={14}
        borderColor="dark.200"
        borderStyle="solid"
        borderRadius="lg"
        width="70%"
        margin="auto">
        <InputGroup>
          <InputLeftElement
            children={<FaSearch color="fontColor.500"/>}
            pointerEvents="none"
          />
          <Input
            onChange={(e: any) => setSearchText(e.target.value)}
            _placeholder={{ color: 'fontColor.500' }}
            focusBorderColor="fontColor.300"
            placeholder="Search for a song"
            backgroundColor="white"
            color="fontColor.600"
            value={searchText}
            borderRadius="lg"
            marginRight={2}
          />
        </InputGroup>
        <Box>
          <ListenOnSpotifyPopover playlistId={playlistId} />
        </Box>
      </Flex>
    </Box>
  )
})
