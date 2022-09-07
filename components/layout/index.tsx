import React from "react";

const styles = require("./layout.module.scss");

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <p>Nav bar</p>
      <main>{React.cloneElement(children)}</main>
      <p>Footer</p>
    </div>
  );
};

export default Layout;
