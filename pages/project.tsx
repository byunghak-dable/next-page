import Layout from '../components/layouts/article'
import { Grid, GridItem } from '@chakra-ui/react'
import PrjCard from '../components/proj-card'

const Project = () => {
  const prjects = [
    { idx: 1, url: 'url', title: 'title', desc: 'desc' },
    { idx: 2, url: 'url', title: 'title', desc: 'desc' },
    { idx: 3, url: 'url', title: 'title', desc: 'desc' }
  ]
  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {prjects.map(prj => (
          <GridItem key={prj.idx}>
            {/* need to put youtube url  */}
            <PrjCard url={prj.url} title={prj.title} desc={prj.desc}></PrjCard>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}

export default Project
