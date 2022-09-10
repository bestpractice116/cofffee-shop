import React from "react";

const styles = require("./menu.module.scss");

type MenuProps = {};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const menuItems = [
    {
      category: "espresso",
      options: [
        {
          name: "cappuccino",
          description: "espresso, hot milk, and steamed milk foam",
          price: 4.25,
        },
        {
          name: "americano",
          description: "two shots of espresso and hot water",
          price: 3.75,
        },
        {
          name: "macchiato",
          description: "coffee with a light layer of foam on top",
          price: 3.75,
        },
        {
          name: "cortado",
          description: "espresso cut with a small amount of warm milk",
          price: 3.75,
        },
        {
          name: "blackhole",
          description: "coffee brewed with a powerful vacuum",
          price: 5.25,
        },
        {
          name: "nova",
          description: "light roast coffee with a fruity flavor profile",
          price: 5.25,
        },
      ],
    },
    {
      category: "sandwiches",
      options: [
        {
          name: "quasar",
          description: "chicken and bacon on sourdough, with ranch dressing",
          price: 8.25,
        },
        {
          name: "big bang",
          description:
            "spicy Italian sausage on a hoagie roll, with peppers and onions",
          price: 8.5,
        },
        {
          name: "galaxy",
          description:
            "roast beef and cheddar on sourdough, with horseradish mayo",
          price: 8.5,
        },
        {
          name: "outer space",
          description:
            "peanut butter and jelly on white bread, cut into star shapes",
          price: 5.5,
        },
        {
          name: "meteor",
          description: "turkey and swiss on rye, with dijon mustard",
          price: 8.25,
        },
        {
          name: "spicy satellite",
          description:
            "pepperoni, jalapeño slices, and Italian dressing on sourdough",
          price: 10.25,
        },
        {
          name: "cosmic club",
          description: "club sandwich with turkey, bacon, and avocado",
          price: 9.5,
        },
      ],
    },
    {
      category: "salads",
      options: [
        {
          name: "moonlight",
          description:
            "light and refreshing fruits and vegetables, including cucumbers, strawberries, and blueberries",
          price: 7.5,
        },
        {
          name: "starry night",
          description:
            "dark leafy greens, topped with crumbled blue cheese and bacon",
          price: 7,
        },
        {
          name: "milky way",
          description: "",
          price: 7,
        },
      ],
    },
    {
      category: "sweets",
      options: [
        {
          name: "moon pie",
          description:
            "two round graham cracker cookies with a marshmallow filling, dipped in chocolate",
          price: 5,
        },
        {
          name: "nebula nougat",
          description:
            "rich and creamy nougat, made with honey, almonds, and dark chocolate",
          price: 5,
        },
        {
          name: "lil dipper",
          description: "chocolate fondue with strawberries and bananas",
          price: 14.5,
        },
      ],
    },
  ];

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
                    // Color alternating (based on overflow format) rows
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
