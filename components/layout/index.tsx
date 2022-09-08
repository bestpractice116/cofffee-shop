import React from "react";
import NavBar from "../library/navBar";
import Footer from "../library/footer";

const styles = require("./layout.module.scss");

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <main>{React.cloneElement(children)}</main>
      <Footer />
    </div>
  );
};

export default Layout;
