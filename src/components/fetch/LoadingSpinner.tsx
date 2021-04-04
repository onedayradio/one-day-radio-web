import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'

const LoadingSpinnerComponent = () => (
  <Center height="100%">
    <Spinner thickness="3px" emptyColor="dark.700" color="fontColor.300" size="xl" />
  </Center>
)

export const LoadingSpinner = React.memo(LoadingSpinnerComponent)
