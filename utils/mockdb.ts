import { StaticImageData } from "next/image";

// Static images but if stored in an actual db would host and only keep a reference to an images url
import WhiteHelmet from "../public/assets/white-helmet.jpeg";
import BlackHelmet from "../public/assets/black-helmet.jpeg";
import RocketBeans from "../public/assets/rocket-beans.jpeg";
import SpaceCups from "../public/assets/space-cups.jpeg";
import Machine from "../public/assets/machine.jpeg";
import OtherMachine from "../public/assets/other-machine.jpeg";
import Cap from "../public/assets/cap.jpeg";

export type ShopItem = {
  id: number;
  image: StaticImageData;
  price: number;
  name: string;
  description: string;
  sizes?: string[];
};

const shopItems = [
  {
    id: 1,
    image: Cap,
    price: 50,
    name: "cap",
    description: "affix on top head",
    sizes: ["s", "m", "l"],
  },

  {
    id: 2,
    image: RocketBeans,
    price: 35,
    name: "rocket beans",
    description: "find your boost",
  },
  {
    id: 3,
    image: SpaceCups,
    price: 80,
    name: "space cups",
    description: "really just a sippy cup when you think about it",
  },
  {
    id: 4,
    image: Machine,
    price: 599,
    name: "the machine",
    description: "do you really need us anymore",
  },
  {
    id: 5,
    image: OtherMachine,
    price: 799,
    name: "the other machine",
    description: "calling it a smart machine would be an insult",
  },
  {
    id: 6,
    image: WhiteHelmet,
    price: 200,
    name: "cofffee head #001",
    description: "kind of like sunglasses but for your entire face",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 7,
    image: BlackHelmet,
    price: 250,
    name: "cofffee head #002",
    description: "everything looks better in matte black",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
];

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

export { shopItems, menuItems };
