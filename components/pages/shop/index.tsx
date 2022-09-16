import React from "react";
import Link from "next/link";
import Image from "next/image";
import ShowOnViewport from "../../library/animations/showOnViewport";
import { ShopItem, shopItems } from "../../../utils/mockdb";

const styles = require("./shop.module.scss");

type ShopViewProps = {};

const ShopView: React.FC<ShopViewProps> = (props: ShopViewProps) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.shopInventoryContainer}>
        <>
          {shopItems.map((product, index) => {
            return (
              <ShowOnViewport key={index} delay={index / 15}>
                <Item {...product} />
              </ShowOnViewport>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default ShopView;

const Item: React.FC<ShopItem> = (props: ShopItem) => {
  const { id, image, name, price, description } = props;

  return (
    <Link href={`/shop/${id}`}>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <span className={styles.imageColorOverlay} />
          <Image
            src={image}
            alt={`product image of: ${name}`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <span className={styles.titleText}>{name}</span>
            <span className={styles.titleText}>${price}</span>
          </div>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
