import type { NextPage } from "next";
import Head from "next/head";
import CargoView from "../../../components/pages/shop/cargo";
import Hero from "../../../public/assets/cofffee-hero.jpeg";

const CargoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE | Cargo</title>
        <meta name="description" content="coffee first, questions later" />
        <meta property="og:title" content="COFFFEE SHOP" />
        <meta property="og:image" content={Hero.src} />
        <meta
          property="og:description"
          content="coffee first, questions later"
        />
        <meta property="og:url" content="http://localhost:3000" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CargoView />
    </>
  );
};

export default CargoPage;
