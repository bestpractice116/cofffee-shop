import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimateSharedLayout } from "framer-motion";
import { debounce } from "../../../utils/helpers";
import MenuToggle from "../animations/menuToggle";

const styles = require("./navBar.module.scss");

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  // Nav Routes
  const { pathname } = useRouter();
  const [selected, setSelected] = useState(pathname === "/contact" ? 3 : 0);
  const navItems = [
    { name: "menu", href: "/#menu" },
    { name: "about", href: "/#about" },
    { name: "shop", href: "/#shop" },
    { name: "contact", href: "/contact" },
  ];

  // Nav Smaller Screen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav
      className={
        showNav
          ? scrollAtTop
            ? styles.navContainer
            : styles.navContainerShadow
          : styles.navContainerHidden
      }
    >
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo} onClick={() => setSelected(0)}>
            COFFFEE
          </a>
        </Link>
      </div>
      {/* Viewable on larger browsers */}
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
        <AnimateSharedLayout>
          {navItems.map((item, key) => (
            <NavItem
              key={key}
              item={item}
              isSelected={selected === key}
              onClick={() => setSelected(key)}
            />
          ))}
        </AnimateSharedLayout>
      </div>
      {/* Viewable on smaller browsers */}
      <div className={styles.menuContainer}>
        {/* TODO: add dropdown nav menu */}
        <MenuToggle isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;

type NavItemProps = {
  item: { name: string; href: string };
  isSelected: boolean;
  onClick: any;
};

// Initial approach taken from https://framermotionplayground.com/tutorial/underlined-menu
const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { item, isSelected, onClick } = props;

  return (
    <div className={styles.navItem} onClick={onClick}>
      <Link href={item.href}>
        <a>{item.name}</a>
      </Link>
      {isSelected && (
        <motion.div className={styles.navUnderline} layoutId="underline" />
      )}
    </div>
  );
};
