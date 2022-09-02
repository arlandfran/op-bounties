import type { NextPage } from "next";
import Head from "next/head";
import LoginBtn from "../components/login-btn";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>One Piece Bounties</title>
        <meta
          name="description"
          content="View the bounties of One Piece characters"
        />
      </Head>

      <h1>hello world</h1>
      <LoginBtn />
    </>
  );
};

export default Home;
