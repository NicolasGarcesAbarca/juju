import Layout from '../../components/AppLayout'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

const Index = ({ data }:{data:any}) => {
  return (
        <Layout>
            <h1>Task</h1>
            <Link href={'/'}>
            <a>go home</a>
            </Link>
            {data.map((task:any) => (
            <div key={task._id}>
             <p>{task.title}</p>
             <p>{task.description}</p>
            </div>
            ))
        }
        </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  const res = await fetch('http://0.0.0.0:3000/api/tasks')
  const { data } = await res.json()
  return { props: { data } }
}
export default Index
