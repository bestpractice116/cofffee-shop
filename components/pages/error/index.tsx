import React from "react";
import Image from "next/image";
import SpaceWalk from "../../../public/assets/space-walk.jpg";

const styles = require("./error.module.scss");

type ErrorViewProps = {};

const ErrorView: React.FC<ErrorViewProps> = (props: ErrorViewProps) => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <Image
          src={SpaceWalk}
          alt="Dog astronaut walking away from destroyed"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.cardContainer}>
          <h1 className={styles.titleText}>we got a problem</h1>
          <p className={styles.subText}>
            we couldn&apos;t find that page but we will keep looking
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorView;
