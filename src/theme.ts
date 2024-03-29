import { extendTheme } from '@chakra-ui/react'

export const AppTheme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        backgroundColor: '#111f20',
      },
      '#root': {
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
      },
    },
  },
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
