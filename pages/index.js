import Head from "next/head";
import Content from "../components/Content";
import Header from "../components/Header";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({ results }) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Content results={results} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results
    },
  };
};
