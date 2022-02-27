import {
  Link,
  Box,
  Center,
  HStack,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

const LinkItem = ({ children, href, path, target, ...props }: any) => {
  const active = path == href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }: any) => {
  return (
    <Box>
      <Flex>
        <Center>
          <Heading>Logo</Heading>
        </Center>
        <HStack>
          <LinkItem href="/project" path={path}>
            project
          </LinkItem>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
