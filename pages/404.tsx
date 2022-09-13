import Head from "next/head";
import React from "react";
import ErrorView from "../components/pages/error";

const ErrorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <ErrorView />
    </>
  );
};

export default ErrorPage;
