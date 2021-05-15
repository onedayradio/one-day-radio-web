import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Children } from '../../shared'

interface SongCardsProps {
  children: Children
}

const stackStlye = {
  '&::-webkit-scrollbar': {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
}

const SongCardsComponent = ({ children }: SongCardsProps) => (
  <Stack sx={stackStlye} spacing={8} overflowY="auto" padding={3} maxHeight={1000}>
    {children}
  </Stack>
)

export const SongCards = React.memo(SongCardsComponent)
