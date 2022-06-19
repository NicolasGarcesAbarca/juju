import type { NextPage } from 'next'
import  Link  from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
      <h1>Juju</h1>
      <div>home here </div>
      <Link href="/atm/first">
        <a>this page!</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
        </Layout>   
    </>
  )
}

export default Home
