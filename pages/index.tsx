import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/AppLayout'
import Image from 'next/image'
import { colors } from '../styles/theme'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <nav>
        <Link href="/atm/first">
            <a>this page!</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
        </nav>
        <section>
          <div className="logo">
            <Image
              src={'/images/carrot.svg'}
              alt='carrot logo'
              width={40}
              height={40}
              layout="fixed"
              />
            <h1>Juju</h1>
          </div>
          <h2>This is nice text to explain your product</h2>
          <Button onClick={() => console.log('a')}>log in</Button>
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
          h1{
            font-size:2rem;
            color:${colors.darkAccent};
          }
          h2{
            text-align:center;
            color:${colors.darkAccent};
            font-size:1.2rem;
          }
          nav{
            display:flex;
            border:2px solid ${colors.lightAccent};
            padding:10px;
          }
          section{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            border:2px solid red;
            width:70%;
          }
          `}</style>
    </>
  )
}

export default Home
