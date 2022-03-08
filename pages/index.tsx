import {
  Stack,
  VStack,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Avatar
} from '@chakra-ui/react'
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
      <Card title="work">
        <Text>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera.
        </Text>
      </Card>
    </Layout>
  )
}

const Post = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <Box flex="1" h="100%">
      <Heading mb="2">{title}</Heading>
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
