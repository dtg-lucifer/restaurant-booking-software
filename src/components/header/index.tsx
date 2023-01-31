import { NextPage } from "next";
import Head from "next/head";

interface HeaderProps {
	heading: string
}

const header: NextPage<HeaderProps> = ({ heading }) => {
  return (
    <Head>
      <title>{heading}</title>
      <meta name="description" content="Booking software for our restaurant" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default header;