import { Box, Heading, Image, Text } from '@chakra-ui/react'

type Card = { url: string; title: string; desc: string }

const PrjCard = ({ url, title, desc }: Card) => {
  return (
    <Box>
      <Image src={url} alt="thumbnail"></Image>
      <Heading> {title}</Heading>
      <Text>{desc}</Text>
    </Box>
  )
}

export default PrjCard
