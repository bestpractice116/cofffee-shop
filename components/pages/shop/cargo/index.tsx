import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShowOnViewport from "../../../library/animations/showOnViewport";
import Modal from "../../../library/modal";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

const styles = require("./cargo.module.scss");

type CargoViewProps = {};

const CargoView: React.FC<CargoViewProps> = (props: CargoViewProps) => {
  const [showModal, setShowModal] = useState(true);
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

  const socialItems = [
    { icon: <FaTwitter />, href: "https://twitter.com/augericke" },
    { icon: <FaGithub />, href: "https://github.com/Augericke/" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/austingericke/",
    },
    {
      icon: <FaExternalLinkSquareAlt />,
      href: "https://www.austingericke.com/",
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
                        alt={`product image of: ${cargo.item.name}`}
                      />
                    </div>
                    <div className={styles.detailsContainer}>
                      <span className={styles.itemText}>{cargo.item.name}</span>
                      {cargo.size && (
                        <span className={styles.itemText}>
                          <span className={styles.guideText}>size:&nbsp;</span>
                          {cargo.size}
                        </span>
                      )}
                    </div>
                    <span className={styles.itemPrice}>
                      ${cargo.item.price}
                    </span>
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
                onClick={() => setShowModal(true)}
              >
                checkout
              </motion.button>
            </div>
          )}
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        content={
          <div className={styles.modalContentContainer}>
            <h2 className={styles.modalTitle}>I&apos;m flattered but...</h2>
            <p className={styles.modalBody}>
              This isn&apos;t a real coffee shop *gasp*. This website was a
              weekend project to learn more about Next.js and explore how
              OpenAi&apos;s image and text generation tools could be used in the
              design process.
            </p>
            <p className={styles.modalBody}>
              All of the images and text you have seen on the the site were
              generated purely using the AI tools available on{" "}
              <a className={styles.link} href={"https://openai.com/dall-e-2/"}>
                OpenAI&apos;s
              </a>{" "}
              platform. There were no alterations or edits made after the fact.
            </p>
            <p className={styles.modalBody}>
              If you enjoyed the site or want to give any suggestions on how to
              improve I would love to hear about it. You can reach me on any of
              the social platforms below:
            </p>
            <div className={styles.socialIconsContainer}>
              {socialItems.map((social, index) => {
                return (
                  <a
                    key={index}
                    className={styles.socialIcon}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CargoView;
