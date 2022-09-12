import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import ShopItemView from "../../../components/pages/shop/item";
import ShopItemSkeleton from "../../../components/pages/shop/item/skeleton";
import ErrorView from "../../../components/pages/error";

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

      setComponent(
        isInvalidItemId ? (
          <ErrorView />
        ) : isLoading ? (
          <ShopItemSkeleton />
        ) : itemData ? (
          <ShopItemView />
        ) : (
          <ErrorView />
        ),
      );

      if (!isInvalidItemId && isLoading) {
        setItemData(shopItems.find((item) => item.id === parseInt(id)));
        setIsLoading(false);
      }
    }
  }, [router.query, router.isReady, isLoading]);

  return (
    <>
      <Head>
        <title>COFFFEE | {itemData ? itemData.name : "Shop"}</title>
        <meta
          name="description"
          content={
            itemData
              ? itemData.description
              : "The best gear that COFFFEE has to offer"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {component}
    </>
  );
};

export default ShopPage;
