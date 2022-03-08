import { Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container mt="5" opacity={0.4} fontSize="sm">
      &Copy; {new Date().getFullYear()} ByungHak Noh. All Rights Reserved.
    </Container>
  )
}

export default Footer
