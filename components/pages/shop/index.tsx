import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ShowOnViewport from "../../library/animations/showOnViewport";

import WhiteHelmet from "../../../public/assets/white-helmet.jpeg";
import BlackHelmet from "../../../public/assets/black-helmet.jpeg";

const styles = require("./shop.module.scss");

type ShopProps = {};

const Shop: React.FC<ShopProps> = (props: ShopProps) => {
  //TODO: Make this a mock api call
  const storeItems = [
    {
      id: 1,
      image: WhiteHelmet,
      price: 200,
      name: "cofffee head #001",
      description: "kind of like sunglasses for your entire face",
    },
    {
      id: 2,
      image: BlackHelmet,
      price: 200,
      name: "cofffee head #001",
      description: "kind of like sunglasses for your entire face",
    },
    {
      id: 3,
      image: WhiteHelmet,
      price: 200,
      name: "cofffee head #001",
      description: "kind of like sunglasses for your entire face",
    },
    {
      id: 4,
      image: BlackHelmet,
      price: 200,
      name: "cofffee head #001",
      description: "kind of like sunglasses for your entire face",
    },
    {
      id: 5,
      image: WhiteHelmet,
      price: 200,
      name: "cofffee head #001",
      description: "kind of like sunglasses for your entire face",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <ShowOnViewport customClass={styles.shopInventoryContainer}>
        <>
          {storeItems.map((product, key) => {
            return <Item key={key} item={product} />;
          })}
        </>
      </ShowOnViewport>
    </div>
  );
};

export default Shop;

type ShopItem = {
  item: {
    id: number;
    image: StaticImageData;
    price: number;
    name: string;
    description: string;
  };
};

const Item: React.FC<ShopItem> = (props: ShopItem) => {
  const { item } = props;

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <Link href={`/shop/${item.id}`}>
          <a className={styles.imageColorOverlay} />
        </Link>
        <Image
          src={item.image}
          alt="Coffee cups and beans floating in space"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.titleText}>{item.name}</span>
          <span className={styles.titleText}>${item.price}</span>
        </div>
        <p className={styles.descriptionText}>{item.description}</p>
      </div>
    </div>
  );
};
