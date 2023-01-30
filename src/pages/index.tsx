import { type NextPage } from "next";
import Head from "next/head";
import Calendar from "../components/calendar";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Restaurant Booking | Open</title>
        <meta name="description" content="Booking software for our restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Calendar />
      </main>
    </>
  );
};

export default Home;
