import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "../../../components/layout";
import ShopItemView from "../../../components/pages/shop/item";
import ShopItemSkeleton from "../../../components/pages/shop/item/skeleton";
import ErrorView from "../../../components/pages/error";

import Hero from "../../../public/assets/cofffee-hero.jpg";
import { ShopItem, shopItems } from "../../../utils/mockdb";

const ShopPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState<ShopItem | undefined>(undefined);
  const [component, setComponent] = useState(<></>);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      const isInvalidItemId =
        !id || typeof id !== "string" || isNaN(parseInt(id));

      // Show 404 if item id is invalid otherwise display loading + item view
      setComponent(
        isInvalidItemId ? (
          <ErrorView />
        ) : isLoading ? (
          <ShopItemSkeleton />
        ) : itemData ? (
          <ShopItemView itemData={itemData} />
        ) : (
          <ErrorView />
        ),
      );

      if (!isInvalidItemId && isLoading) {
        const data = shopItems.find((item) => item.id === parseInt(id));
        setItemData(data);

        // Added a delay just to showcase the loading skelton (but would and should remove if intended for actual use)
        if (data) {
          setInterval(function () {
            setIsLoading(false);
          }, 1000);
        } else {
          setIsLoading(false);
        }
      }
    }
  }, [router.query, router.isReady, isLoading, itemData]);

  return (
    <Layout
      pageMeta={{
        title: `COFFFEE | ${itemData ? itemData.name.toUpperCase() : "Shop"}`,
        description: `${
          itemData
            ? itemData.description
            : "The best gear this COFFFEE shop has to offer"
        }`,
        image: itemData ? itemData.image.src : Hero.src,
        imageAlt: itemData
          ? itemData.description
          : "A coffee shop floating in space along with other coffee related debris",
      }}
    >
      {component}
    </Layout>
  );
};

export default ShopPage;
