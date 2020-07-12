import React from 'react'
import { ApolloError } from '@apollo/client'

import { Children } from '../../shared'

import { LoadingSpinner } from './LoadingSpinner'
import { ErrorMessage } from './ErrorMessage'

interface QueryResponseWrapperProps {
  children: Children
  loading?: boolean
  error?: ApolloError
}

const QueryResponseWrapperComp = ({
  children,
  loading = false,
  error,
}: QueryResponseWrapperProps) => {
  if (loading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} message="An unexpected error has occurred" />
  }
  return <>{children}</>
}

export const QueryResponseWrapper = React.memo(QueryResponseWrapperComp)
