import React from 'react'

import { ApolloError } from '@apollo/client'
import { Text, Flex } from '@chakra-ui/react'

const graphErrorToError = (error: ApolloError | Error) => {
  if ((error as ApolloError).networkError) {
    return new Error((error as ApolloError).networkError?.message)
  }
  const { graphQLErrors = [] } = error as ApolloError
  const firstError = graphQLErrors[0]
  console.log('firstError', firstError)
  return new Error(firstError ? firstError.message : '')
}

const renderSpacers = () => (
  <div>
    <br />
  </div>
)

interface ErrorMessageProps {
  error?: ApolloError | Error
  message?: string
}

const ErrorMessageComp = ({ error, message }: ErrorMessageProps) => {
  let finalError: (ApolloError | undefined) | Error = error
  if (error && error.message) {
    console.log(error.message.includes('Graph'))
  }
  if (error && error.message && error.message.includes('Graph')) {
    finalError = graphErrorToError(error)
  }
  return (
    <Flex direction="column" justify="center" align="center" data-testid="error-message-container">
      <Text color="tomato" fontWeight="bold" style={{ fontSize: 14 }} textAlign="center">
        {message && message}
        {message && finalError && renderSpacers()}
        {finalError && finalError.message}
      </Text>
    </Flex>
  )
}

export const ErrorMessage = React.memo(ErrorMessageComp)
