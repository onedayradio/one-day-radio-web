import React from 'react'
import { Flex, Box } from '@chakra-ui/core'

interface SongCardProps {
  name: string,
  artists: string
  sharedBy: string
}

const SongCardComp = ({
  name,
  artists,
  sharedBy,
}: SongCardProps) => {
  return (
  <Box>
    <Flex>{ name }</Flex>
    <Flex>{ artists }</Flex>
    <Flex>{ sharedBy }</Flex>
  </Box>
)
}

export const SongCard = React.memo(SongCardComp)
