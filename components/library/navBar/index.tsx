import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

const styles = require("./navBar.module.scss");

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className={styles.navContainer}>
      <span className={styles.logo}>COFFFEE</span>
      <div className={styles.socialIconsContainer}>
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
      <div className={styles.navRoutesContainer}>
        <span className={styles.navRoute}>menu</span>
        <span className={styles.navRoute}>about</span>
        <span className={styles.navRoute}>shop</span>
        <span className={styles.navRoute}>contact</span>
      </div>
    </div>
  );
};

export default NavBar;
