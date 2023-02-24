
import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { Children } from "react"


export default function Post(){
    return (
        <div>
            <Layout home={''}>

            <Head>
                <title>First post</title>
            </Head>

            <h1>My first next post</h1>

            
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto eaque id. Nam beatae excepturi rem at enim deserunt ullam assumenda nobis veniam voluptate ratione iste veritatis dolorem, facilis tempore!</p>

            </Layout>
            
        </div>
    )
}