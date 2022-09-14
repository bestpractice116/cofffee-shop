import type { NextPage } from "next";
import Head from "next/head";
import ShopView from "../../components/pages/shop";
import Hero from "../../public/assets/cofffee-hero.jpeg";

const ShopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE | Shop</title>
        <meta name="description" content="coffee first, questions later" />
        <meta property="og:title" content="COFFFEE SHOP" />
        <meta property="og:image" content={Hero.src} />
        <meta
          property="og:description"
          content="coffee first, questions later"
        />
        <meta property="og:url" content="https://cofffee-shop.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopView />
    </>
  );
};

export default ShopPage;
