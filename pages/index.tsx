import { Box, Center, Flex, Heading, Text, Avatar } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Home = () => {
  return (
    <Layout>
      <Box h="300"></Box>
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
        <Info
          title="2020"
          desc="Participate in FaceLab project as backend & face compositing developer."
        ></Info>
        <Info
          title="2021"
          desc="Participate in LolLab as full-stack developer."
        ></Info>
        <Info
          title="2022"
          desc="Worked at MaidInReal as a backend devleoper."
        ></Info>
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

// bio info
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

// title - desc post
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

// paragraph
const Card = ({ title, children }: any) => {
  return (
    <Box mt="5">
      <Heading
        w="min-content"
        size="md"
        mb="3"
        pt="1"
        pb="1"
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
