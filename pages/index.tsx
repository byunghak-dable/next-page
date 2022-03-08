import { Box, Center, Flex, Heading, Text, Avatar } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Home = () => {
  return (
    <Layout>
      <Center bg="gray.600" px="4" py="2" borderRadius="5" fontWeight="bold">
        Hello, I&apos;m a full-stack developer
      </Center>
      <Flex justify="center" align="center" py="5" wrap="wrap" gap="5">
        <Post
          title="Byunghak Noh"
          desc="Digital Craftman ( Developer / Artist )"
        />
        <Avatar w="95" h="95" src="" />
      </Flex>
      <Card title="Info">
        <Info title="1993" desc="Born in Korea." />
        <Info
          title="2019"
          desc="Complete Construction System Engineering at Ajou University."
        />
      </Card>
      <Card title="work">
        <Text>
          I&apos;m full-stack developer that He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code. When not online, he loves hanging out
          with his camera.
        </Text>
      </Card>
    </Layout>
  )
}

const Info = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <Flex align="baseline">
      <Heading h="100%" mr="8" size="sm">
        {title}
      </Heading>
      <Text>{desc}</Text>
    </Flex>
  )
}
const Post = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <Box flex="1" h="100%">
      <Heading mb="2" size="sm">
        {title}
      </Heading>
      <Text>{desc}</Text>
    </Box>
  )
}

const Card = ({ title, children }: any) => {
  console.log(children)
  return (
    <Box>
      <Heading
        w="min-content"
        size="md"
        pt="1"
        pb="1"
        mb="2"
        borderBottomWidth="5px"
        borderColor="gray.600"
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default Home
