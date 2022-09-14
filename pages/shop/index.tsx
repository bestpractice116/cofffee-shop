import type { NextPage } from "next";
import Layout from "../../components/layout";
import ShopView from "../../components/pages/shop";

const ShopPage: NextPage = () => {
  return (
    <Layout
      pageMeta={{
        title: "COFFFEE | Shop",
        description: "The best gear this COFFFEE shop has to offer",
      }}
    >
      <ShopView />
    </Layout>
  );
};

export default ShopPage;
