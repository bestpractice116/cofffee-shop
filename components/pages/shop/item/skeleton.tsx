import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const styles = require("./item.module.scss");
import "react-loading-skeleton/dist/skeleton.css";

type ShopItemSkeletonProps = {};

const ShopItemSkeleton: React.FC<ShopItemSkeletonProps> = (
  props: ShopItemSkeletonProps,
) => {
  const sizeOptions = ["s", "m", "l"];
  return (
    <SkeletonTheme baseColor="#8D9481" highlightColor="#F0E7D8">
      <div className={styles.pageContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Skeleton width="100%" height="100%" />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.itemDataContainer}>
              <span className={styles.itemPrice}>
                <Skeleton width="20%" height="10px" />
              </span>
              <h1 className={styles.itemTitle}>
                <Skeleton width="200px" height="100%" />
              </h1>
              <p className={styles.itemDescription}>
                <Skeleton width="100%" height="50px" />
              </p>
            </div>
            <div className={styles.sizingContainer}>
              <div className={styles.sizeOptionsContainer}>
                {sizeOptions.map((size, index) => {
                  return <Skeleton key={index} width="30px" height="30px" />;
                })}
              </div>
            </div>
            <div>
              <Skeleton width="200px" height="40px" />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ShopItemSkeleton;
