import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a DevOps based in Shanghai!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daramrj
          </Heading>
          <p>DevOps ( Artist / DevOps / Games )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/darmarj.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Darmarj now is working in HP.inc for couple of years as the IT, Opration, DevOps, QA.
          In the past of yeas, I strive up on the K8s ans front-dev section. When in personal days,
          I want to spent the time on reading, hacking, etc.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1983</BioYear>
          Born in Shanghai (上海), China.
        </BioSection>
        <BioSection>
          <BioYear>2005</BioYear>
          Completed the International Business program in Shanghai Business College.
          Self & training learning IT knowledge for more than 10 years.
        </BioSection>
        <BioSection>
          <BioYear>2009</BioYear>
          Worked at HP.inc & HP Enterprise
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/darmarj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @darmarj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/earthtrekkers" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @Travel
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            // href="https://www.youtube.com/c/JomaOppa"
            title="Mindset with Happiness, Fullfilment, Clarity"
            thumbnail={thumbYouTube}
          >
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
