import React from 'react'
import { Spinner, Text, Flex } from '@chakra-ui/core'

interface LoadingSpinnerProps {
  loadingText?: string
}

const LoadingSpinnerComp = ({ loadingText = 'Loading....' }: LoadingSpinnerProps) => (
  <Flex direction="row" align="center" justify="center">
    <Spinner size="lg" mr={2} />
    <Text>{loadingText}</Text>
  </Flex>
)

export const LoadingSpinner = React.memo(LoadingSpinnerComp)
