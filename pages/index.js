import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../utils/posts";
import Head from "next/head";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
export default function Home({ allPostsData }) {
    return (
        <Layout home>
            {/* Keep the existing code here */}
            <Head>
                <title>Paparrot</title>
            </Head>
            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>My personal page</h2>
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
        </Layout>
    );
}