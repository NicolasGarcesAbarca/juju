import Layout from '../../components/AppLayout'
import Link from 'next/link'
import { GetStaticProps } from 'next'

const Main = ({ data }:{data:any}) => {
  const { title, description } = data.data
  return (
        <Layout>
            <h1>Example Page</h1>
            <Link href={'/'}>
            <a>go home</a>
            </Link>
            <p>{title}</p>
            <p>{description}</p>
        </Layout>
  )
}
export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch('http://0.0.0.0:3000/api/tasks/62b8948eeade8f356c469c5e')
  const data = await res.json()
  console.log(data)
  return { props: { data } }
}
export default Main
