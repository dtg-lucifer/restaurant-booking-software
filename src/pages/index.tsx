import { type NextPage } from "next";
import Calendar from "../components/calendar";
import Header from "../components/header";

const Home: NextPage = () => {

  return (
    <>
      <Header heading="Cool Restaurant | Open" />
      <main className="">
        <Calendar />
      </main>
    </>
  );
};

export default Home;
