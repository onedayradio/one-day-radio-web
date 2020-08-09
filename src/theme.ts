import { theme } from '@chakra-ui/core'

export const AppTheme = {
  ...theme,
  fonts: {
    heading: '"Josefin Sans", sans-serif',
    body: '"Josefin Sans", sans-serif',
    mono: '"Josefin Sans", monospace',
  },
  colors: {
    ...theme.colors,
    spotify: {
      200: '#52b85e',
    },
    dark: {
      200: '#111f20',
      500: '#293636',
      600: '#293637',
    },
  },
}
