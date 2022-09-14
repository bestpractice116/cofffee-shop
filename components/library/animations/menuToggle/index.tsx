// initial approach taken from https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed

import React from "react";
import { motion } from "framer-motion";

const styles = require("./menuToggle.module.scss");

type MenuToggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
  customClass?: string;
};

const MenuToggle: React.FC<MenuToggleProps> = (props: MenuToggleProps) => {
  const { isOpen, setIsOpen, size = 23, customClass } = props;

  return (
    <div className={styles.buttonContainer} onClick={() => setIsOpen(!isOpen)}>
      <svg width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`}>
        <Path
          className={customClass ?? styles.path}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          className={customClass ?? styles.path}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
            open: { d: "M 3 16.5 L 17 2.5", opacity: 0 },
          }}
        />
        <Path
          className={customClass ?? styles.path}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  );
};

export default MenuToggle;

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    initial={false}
    {...props}
  />
);
