import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/AppLayout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <section>

        <div className="logo">
      <Image
        src={'/images/carrot.svg'}
        alt='carrot logo'
        width={100}
        height={100}
        layout="fixed"
        />

      <h1>Juju</h1>
        </div>
      <Link href="/atm/first">
        <a>this page!</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
        </section>
        </Layout>
        <style jsx>{`
          img{
            width:100px;
          }
          .logo{
            display:flex;
            justify-content: center;
          }
          `}</style>
    </>
  )
}

export default Home
