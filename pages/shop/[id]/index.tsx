import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import ShopItemView from "../../../components/pages/shop/item";
import ShopItemSkeleton from "../../../components/pages/shop/item/skeleton";
import ErrorView from "../../../components/pages/error";
import Hero from "../../../public/assets/cofffee-hero.jpeg";

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
          <ShopItemView itemData={itemData} />
        ) : (
          <ErrorView />
        ),
      );

      if (!isInvalidItemId && isLoading) {
        const data = shopItems.find((item) => item.id === parseInt(id));
        setItemData(data);

        // Added a delay just to showcase the loading skelton
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
    <>
      <Head>
        <title>
          {itemData
            ? `COFFFEE | ${itemData.name.toUpperCase()}`
            : "COFFFEE | Shop"}
        </title>
        <meta
          name="description"
          content={
            itemData
              ? itemData.description
              : "The best gear that COFFFEE has to offer"
          }
        />
        <meta
          property="og:title"
          content={
            itemData
              ? `COFFFEE | ${itemData.name.toUpperCase()}`
              : "COFFFEE | Shop"
          }
        />
        <meta
          property="og:image"
          content={itemData ? itemData.image.src : Hero.src}
        />
        <meta
          property="og:description"
          content={
            itemData
              ? itemData.description
              : "The best gear that COFFFEE has to offer"
          }
        />
        <meta
          property="og:url"
          content={`http://localhost:3000/${router.asPath}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {component}
    </>
  );
};

export default ShopPage;
