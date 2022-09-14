import React from "react";
import Layout from "../components/layout";
import ErrorView from "../components/pages/error";
import SpaceWalk from "../public/assets/space-walk.jpg";

const ErrorPage: React.FC = () => {
  return (
    <Layout
      pageMeta={{
        title: "Page Not Found",
        image: SpaceWalk.src,
        imageAlt: "A dog astronaut floating in space",
      }}
    >
      <ErrorView />
    </Layout>
  );
};

export default ErrorPage;
