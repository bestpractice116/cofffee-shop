import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShowOnViewport from "../../../library/animations/showOnViewport";
import { motion } from "framer-motion";

const styles = require("./cargo.module.scss");

type CargoViewProps = {};

const CargoView: React.FC<CargoViewProps> = (props: CargoViewProps) => {
  const [currentCargo, setCurrentCargo] = useState([]);
  const [amountOwed, setAmountOwed] = useState(0);

  const shippingAmount = currentCargo.length === 0 ? 0 : 10;
  const taxAmount = currentCargo.length === 0 ? 0 : 2.5;
  const summaryAmounts = [
    { category: "subtotal", value: amountOwed.toFixed(2) },
    { category: "shipping", value: shippingAmount.toFixed(2) },
    { category: "est sales tax", value: taxAmount.toFixed(2) },
    {
      category: "total",
      value: (amountOwed + taxAmount + shippingAmount).toFixed(2),
    },
  ];

  useEffect(() => {
    const cargo = JSON.parse(localStorage.getItem("cargo") || "[]");
    setCurrentCargo(cargo);

    const sum = cargo.reduce((accumulator: number, object: any) => {
      return accumulator + object.item.price;
    }, 0);

    setAmountOwed(sum);
  }, []);

  function handleClearCargo() {
    localStorage.removeItem("cargo");
    setCurrentCargo([]);
    setAmountOwed(0);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cargoContainer}>
        {currentCargo && (
          <>
            {currentCargo.length !== 0 && (
              <h1 className={styles.sectionHeader}>CARGO</h1>
            )}
            {currentCargo.map((cargo: any, index: number) => {
              return (
                <ShowOnViewport customClass={styles.itemContainer} key={index}>
                  <>
                    <div className={styles.imageContainer}>
                      <Image
                        src={cargo.item.image}
                        alt={`product image of ${cargo.item.name}`}
                      />
                    </div>
                    <div className={styles.detailsContainer}>
                      <span className={styles.itemText}>{cargo.item.name}</span>
                      <span className={styles.itemText}>
                        <span className={styles.guideText}>size:&nbsp;</span>
                        {cargo.size}
                      </span>
                    </div>
                    <span className={styles.itemText}>${cargo.item.price}</span>
                  </>
                </ShowOnViewport>
              );
            })}
          </>
        )}
        {currentCargo.length === 0 && (
          <ShowOnViewport customClass={styles.emptyCartPoem}>
            <>
              <p>the emptiness of space is vast and cold,</p>
              <p>
                but it&apos;s nothing compared to the emptiness of a shopping
                cart
              </p>
              <p>
                there&apos;s something so sad about a cart that&apos;s been
                abandoned,
              </p>
              <p>waiting for someone to come back and fill it up again</p>
              <Link href={"/shop"}>
                <a className={styles.emptyCartButton}>fill the void</a>
              </Link>
            </>
          </ShowOnViewport>
        )}
      </div>
      <div className={styles.checkOutContainer}>
        <div className={styles.summaryContainer}>
          <h1 className={styles.summaryText}>order summary</h1>
          {summaryAmounts.map((item, index) => {
            return (
              <span className={styles.lineItem} key={index}>
                <span className={styles.categoryText}>{item.category}</span>
                <span>${item.value}</span>
              </span>
            );
          })}
          {currentCargo.length !== 0 && (
            <div className={styles.buttonContainer}>
              <motion.button
                className={styles.summaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                onClick={() => handleClearCargo()}
              >
                clear cargo
              </motion.button>
              <motion.button
                className={styles.summaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
              >
                checkout
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CargoView;
