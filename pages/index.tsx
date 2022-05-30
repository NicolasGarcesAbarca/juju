import type { NextPage } from 'next'
import  Link  from 'next/link';

//Home:React.FC
const Home: NextPage = () => {
  return (
    <>
      <div>home here </div>
      <Link href="/atm/first">
        <a>this page!</a>
      </Link>
    </>
  )
}

export default Home
