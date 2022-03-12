import { Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center p="3" mt="5" opacity={0.4} fontSize="sm">
      &Copy; {new Date().getFullYear()} ByungHak Noh. All Rights Reserved.
    </Center>
  )
}

export default Footer
