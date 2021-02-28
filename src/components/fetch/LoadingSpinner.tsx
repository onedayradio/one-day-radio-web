import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'

interface LoadingSpinnerProps {
  loadingText?: string
}

export const LoadingSpinner = React.memo(({ loadingText = 'Loading....' }: LoadingSpinnerProps) => (
  <Center height="100%">
    <Spinner thickness="3px" emptyColor="dark.700" color="fontColor.300" size="xl" />
  </Center>
))
