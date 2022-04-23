import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

let name: string = 'wea'
let hola: boolean = true
let array: string[] = ['a', 'b', 'c']
let role: [number, string]
type Person = { name: string, age: number }
let person: Person = { name: 'wea', age: 18 }
let arrayPerson: Person[]= [{ name: 'wea', age: 18 }, { name: 'wea', age: 18 }]

function printwea(name:string){
    console.log(name)
}
printwea('wea')
//never returns nothing
//
let funky:(name:string)=>void;
funky = (name:string)=>{
    return 1;
}

interface Person1{
    name:string;
    age:number;
}

const First: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Juju atm</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
                src="/images/vercel.svg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
        </Layout>
    )
}

export default First
