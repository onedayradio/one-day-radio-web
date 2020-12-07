import React, { useState, useEffect } from 'react'
import { Input } from '@chakra-ui/react'

interface SearchBarProps {
  onSearch: any
}

export const SearchBar = React.memo(({ onSearch }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText)
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText, onSearch]);

  return (
    <Input
      placeholder="Search on the playlist"
      value={searchText}
      onChange={(e:any) => setSearchText(e.target.value)}
      mr={2}/>
  )
})
