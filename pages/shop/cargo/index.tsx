import type { NextPage } from "next";
import Head from "next/head";
import CargoView from "../../../components/pages/shop/cargo";

const CargoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE | Cargo</title>
        <meta name="description" content="Time to checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CargoView />
    </>
  );
};

export default CargoPage;
