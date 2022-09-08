import React from "react";
import NavBar from "../library/navBar";

const styles = require("./layout.module.scss");

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <main>{React.cloneElement(children)}</main>
      <p>Footer</p>
    </div>
  );
};

export default Layout;
