import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fullstack Reddit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-4xl">Test</h1>
      </Layout>
    </>
  );
};

export default Home;
