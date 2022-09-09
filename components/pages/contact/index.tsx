import React from "react";
import { motion } from "framer-motion";
import ShowOnViewport from "../../library/animations/showOnViewport";

const styles = require("./contact.module.scss");

type ContactProps = {};

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  return (
    <ShowOnViewport customClass={styles.pageContainer}>
      <div className={styles.contactCardContainer}>
        <div className={styles.cardTextContainer}>
          <h1 className={styles.cardTitleText}>Trying to get in touch?</h1>
          <p className={styles.cardBodyText}>
            The person would like to hear suggestions on how to improve their
            work performance
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <a
            href={"https://twitter.com/augericke"}
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              className={styles.contactButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I have some suggestions
            </motion.button>
          </a>
          <a href="mailto:austingericke.inquiries@gmail.com">
            <motion.button
              className={styles.contactButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              I require a direct line to your creator
            </motion.button>
          </a>
        </div>
      </div>
    </ShowOnViewport>
  );
};

export default Contact;
