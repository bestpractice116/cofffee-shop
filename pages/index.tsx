import type { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/pages/landing";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export default Home;
