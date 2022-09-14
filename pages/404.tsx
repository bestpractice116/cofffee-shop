import Head from "next/head";
import React from "react";
import ErrorView from "../components/pages/error";
import Hero from "../public/assets/cofffee-hero.jpeg";

const ErrorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <title>COFFFEE SHOP</title>
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
      <ErrorView />
    </>
  );
};

export default ErrorPage;
