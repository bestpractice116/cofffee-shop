import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ShowOnViewport from "../../../library/animations/showOnViewport";
import { ShopItem } from "../../../../utils/mockdb";

const styles = require("./item.module.scss");

type ShopItemViewProps = {
  itemData: ShopItem;
};

const ShopItemView: React.FC<ShopItemViewProps> = ({ itemData }) => {
  const [cargoAdded, setCargoAdded] = useState(false);
  const [itemSize, setItemSize] = useState(0);
  const sizeOptions = itemData.sizes;

  const router = useRouter();

  function handleAddToCargo() {
    const currentCargo = JSON.parse(localStorage.getItem("cargo") || "[]");
    const newItem = {
      item: itemData,
      size: sizeOptions ? sizeOptions[itemSize] : "",
    };
    currentCargo.push(newItem);
    localStorage.setItem("cargo", JSON.stringify(currentCargo));
    setCargoAdded(true);
  }

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
              placeholder="blur"
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
          {sizeOptions && !cargoAdded && (
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
          )}

          <motion.button
            className={cargoAdded ? styles.cartButtonView : styles.cartButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            onClick={() =>
              !cargoAdded ? handleAddToCargo() : router.push("/shop/cargo")
            }
          >
            {cargoAdded ? (
              "view cargo"
            ) : (
              <>
                <span className={styles.itemPriceSmall}>
                  ${itemData.price} -&nbsp;
                </span>{" "}
                add to cargo
              </>
            )}
          </motion.button>
          {cargoAdded && (
            <Link href="/shop">
              <a className={styles.cartButton}>keep shopping</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopItemView;
