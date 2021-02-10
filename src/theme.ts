import { extendTheme } from '@chakra-ui/react'

export const AppTheme = extendTheme({
  fonts: {
    heading: '"Josefin Sans", sans-serif',
    body: '"Josefin Sans", sans-serif',
    mono: '"Josefin Sans", monospace',
  },
  colors: {
    spotify: {
      200: '#52b85e',
    },
    dark: {
      200: '#111f20',
      500: '#293636',
      600: '#293637',
      700: '#888f90',
    },
    fontColor: {
      200: '#ffffff',
      300: '#009ddb',
      500: '#888f90',
      600: '#111f20',
    },
  },
})
