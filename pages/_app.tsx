import Chakra from '../components/chakra'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/index'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default App
