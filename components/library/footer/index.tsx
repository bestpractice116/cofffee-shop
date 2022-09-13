import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = require("./footer.module.scss");

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <div className={styles.brandItems}>
          <Link href="/">
            <a className={styles.logo}>COFFFEE</a>
          </Link>
          <div className={styles.socialContainer}>
            <a
              className={styles.socialIcon}
              href="https://twitter.com/augericke"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className={styles.socialIcon}
              href="https://github.com/Augericke/cofffee-shop"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.linkedin.com/in/austingericke/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.storeItems}>
          <a
            href="https://www.google.com/moon/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.locationItems}>
              <span>212 Crater Ln,</span>
              <span>Selene City Moon, 10101</span>
            </div>
          </a>
          <span>7:00 - 6:00pm daily</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
