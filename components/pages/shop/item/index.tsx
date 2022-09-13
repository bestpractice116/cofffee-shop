import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShowOnViewport from "../../../library/animations/showOnViewport";
import { ShopItem } from "../../../../utils/mockdb";

const styles = require("./item.module.scss");

type ShopItemViewProps = {
  itemData: ShopItem;
};

const ShopItemView: React.FC<ShopItemViewProps> = ({ itemData }) => {
  const [itemSize, setItemSize] = useState(2);
  const sizeOptions = ["xs", "s", "m", "l", "xl"];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={itemData.image}
              alt={`product image of ${itemData.image}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
        <div className={styles.detailsSection}>
          <ShowOnViewport customClass={styles.itemDataContainer}>
            <>
              <span className={styles.itemPrice}>${itemData.price}</span>
              <h1 className={styles.itemTitle}>{itemData.name}</h1>
              <p className={styles.itemDescription}>{itemData.description}</p>
            </>
          </ShowOnViewport>
          <div className={styles.sizingContainer}>
            <span className={styles.sizeText}>select a size</span>
            <div className={styles.sizeOptionsContainer}>
              {sizeOptions.map((size, index) => {
                return (
                  <div
                    key={index}
                    className={
                      itemSize === index
                        ? styles.sizeOptionSelected
                        : styles.sizeOption
                    }
                    onClick={() => {
                      setItemSize(index);
                    }}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <motion.button
            className={styles.cartButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <span className={styles.itemPriceSmall}>
              ${itemData.price} -&nbsp;
            </span>
            add to cargo
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemView;
