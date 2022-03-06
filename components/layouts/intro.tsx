import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Layout = ({ children }: any) => {
  return (
    <div>
      <motion.div
        style={{
          background: 'white',
          width: '500px',
          height: '500px'
        }}
        animate={{ x: 100, rotate: 360 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      />
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
