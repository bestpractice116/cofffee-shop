import React from "react";
import { motion } from "framer-motion";

type ShowOnScrollProps = {
  children: React.ReactElement;
  duration?: number;
  delay?: number;
  customClass?: string;
};

const ShowOnScroll: React.FC<ShowOnScrollProps> = ({
  children,
  duration = 1,
  delay = 0,
  customClass,
}) => {
  return (
    <motion.span
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [30, 0], opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      className={customClass}
    >
      {children}
    </motion.span>
  );
};

export default ShowOnScroll;
