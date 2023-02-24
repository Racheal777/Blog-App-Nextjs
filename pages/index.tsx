import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsDatas } from '../lib/posts'



export  async function getStaticProps(){
  const allPostsData = getSortedPostsDatas()

  return {
    props: {
      allPostsData
    }
  }
};



export default function Home({ allPostsData }) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus ex ad quos quam quibusdam ea numquam nostrum tenetur. Natus similique, itaque illum eius quam assumenda vero officia tempora facilis.</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    <Link href='/posts/post'>Next Page</Link>
  </Layout>
  )
}
