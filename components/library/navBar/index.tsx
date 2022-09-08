import React, { useState, useEffect } from "react";
import Link from "next/link";
import { debounce } from "../../../utils/helpers";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = require("./navBar.module.scss");

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  // State to hide nav on scroll down and show on scroll up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 50;
      const scrollMinDisplay = 5;

      setShowNav(
        // Show Nav if scroll up distance is larger than scroll buffer
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > scrollBuffer) ||
          // or within minDisplay range from the top of the page
          currentScrollPos < scrollMinDisplay,
      );
      setScrollAtTop(currentScrollPos <= scrollBuffer);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, showNav, scrollAtTop]);

  return (
    <div
      className={
        showNav
          ? scrollAtTop
            ? styles.navContainer
            : styles.navContainerShadow
          : styles.navContainerHidden
      }
    >
      <Link href="/">
        <a className={styles.logo}>COFFFEE</a>
      </Link>
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
        <Link href="/contact">
          <a className={styles.navRoute}>contact</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
