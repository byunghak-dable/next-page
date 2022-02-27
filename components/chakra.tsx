import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

const Chakra = ({ children, cookies }: any) => {
  const colorModeManager = 'string'
    ? cookieStorageManager(cookies)
    : localStorageManager
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra
