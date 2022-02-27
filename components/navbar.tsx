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
import Logo from './logo'
import { IoLogoGithub } from 'react-icons/io5'

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
        <Center mr={3}>
          <Heading>
            <Logo />
          </Heading>
        </Center>
        <HStack>
          <LinkItem href="/project" path={path}>
            project
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/weed082/weed-website"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
