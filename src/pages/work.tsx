import { Container } from '@chakra-ui/layout'
import { Blobs } from '../components/blobs'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'
import { Work } from '../views/work'

const WorkPage = () => (
  <Container maxW="container.md">
    <Nav />
    <Work />
    <Blobs view="work" />
    <Footer />
  </Container>
)

export default WorkPage
