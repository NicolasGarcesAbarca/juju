import Link from 'next/link'
import Layout from '../../components/AppLayout'
import { GetStaticProps } from 'next'

const About = ({ data }:{data:any}) => {
  return <>
    <Layout>
    <h1>About</h1>
    <p> {data.name}</p>
    <Link href={'/'}>
    <a>go back home boy</a>
    </Link>
    </Layout>
    </>
}

// this is excecuted in the server!
export const getStaticProps:GetStaticProps = async () => {
  const berryUrl = 'https://pokeapi.co/api/v2/berry/1'
  const data = await fetch(berryUrl)
  const json = await data.json()
  return { props: { data: json } }
}

export default About
