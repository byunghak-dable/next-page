import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box  opacity={0.4} fontSize="sm">
      &Copy; {new Date().getFullYear()} ByungHak Noh. All Rights Reserved.
    </Box>
  )
}

export default Footer
