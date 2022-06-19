import Layout from "../../components/layout";
import Link from "next/link";
import { GetStaticProps } from "next";

const Main=({data}:{data:any})=>{
    return(
        <Layout>
            <h1>Example Page</h1>
            <Link href={'/'}>
            <a>go home</a>
            </Link>
            <p>{data.name}</p>
        </Layout>
    )
}
export const getStaticProps:GetStaticProps = async ()=>{
    const res=await fetch('http://0.0.0.0:3000/api/example');
    const data=await res.json();
    return {props:{data}};
}
export default Main;
