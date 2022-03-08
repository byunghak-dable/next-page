import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Layout = ({ children }: any) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }
  return (
    <motion.article variants={variants}>
      <Container>{children}</Container>
    </motion.article>
  )
}

export default Layout
