import gql from 'graphql-tag'

export const userInfoFull = gql`
  fragment UserInfoFull on User {
    id
    email
    firstname
    lastname
  }
`

export const userInfoShort = gql`
  fragment UserInfoShort on UserShort {
    id
    firstname
    lastname
  }
`
