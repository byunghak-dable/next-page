import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

const Main = ({ children, router, api }: any) => {
  console.log(api)
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, iniital-scale=1" />
        <meta name="description" content="Byung Hak homepage" />
        <meta name="author" content="Byung Hak Noh" />
        <meta name="author" content="weed" />
        <title>Byung Hak - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container>{children}</Container>
      <Footer />
    </Box>
  )
}

export default Main
