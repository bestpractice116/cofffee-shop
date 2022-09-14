import React from "react";
import { menuItems } from "../../../utils/mockdb";

const styles = require("./menu.module.scss");

type MenuProps = {};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <div className={styles.menuContainer} id="menu">
      <div className={styles.titleContainer}>
        <h2 className={styles.logo}>COFFFEE</h2>
        <h3 className={styles.tagline}>coffee first, questions later</h3>
      </div>
      <div className={styles.menuListContainer}>
        {menuItems.map((category, index) => {
          return (
            <React.Fragment key={`category-${index}`}>
              <div className={styles.categoryContainer}>
                <h3
                  className={
                    // Color alternating rows (based on overflow format)
                    index % 3 === 0
                      ? styles.categoryTitleGreen
                      : styles.categoryTitle
                  }
                >
                  {category.category}
                </h3>
              </div>
              {category.options.map((item, index) => {
                return (
                  <div
                    className={styles.itemContainer}
                    key={`${item}-${index}`}
                  >
                    <div className={styles.itemTextContainer}>
                      <span className={styles.itemTitle}>{item.name}</span>
                      <span className={styles.itemDescription}>
                        {item.description}
                      </span>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
