import type { NextPage } from "next";
import Layout from "../../../components/layout";
import CargoView from "../../../components/pages/shop/cargo";

const CargoPage: NextPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "COFFFEE | Cargo",
      }}
    >
      <CargoView />
    </Layout>
  );
};

export default CargoPage;
