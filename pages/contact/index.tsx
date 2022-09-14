import type { NextPage } from "next";
import Head from "next/head";
import ContactView from "../../components/pages/contact";
import Hero from "../../public/assets/cofffee-hero.jpeg";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE | Contact</title>
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
      <ContactView />
    </>
  );
};

export default ContactPage;
