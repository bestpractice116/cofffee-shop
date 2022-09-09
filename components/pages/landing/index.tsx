import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroImage from "../../../public/assets/cofffee-hero.jpeg";
import CoffeeCupsImage from "../../../public/assets/cofffee-cups.jpeg";

const styles = require("./landing.module.scss");

type LandingProps = {};

const Landing: React.FC<LandingProps> = (props: LandingProps) => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <Image
          src={HeroImage}
          alt="Coffee shop floating in space"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.landingPageContainer}>
        {/* TODO: break this into its own component */}
        <div className={styles.aboutCardContainer}>
          <div className={styles.aboutImageContainer}>
            <Image
              src={CoffeeCupsImage}
              alt="Coffee cups and beans floating in space"
              layout="fill"
              objectFit="cover"
            />
            <h1 className={styles.aboutTitleText}>ABOUT</h1>
          </div>
          <div className={styles.aboutTextContainer} id="about">
            <div className={styles.blockQuoteContainer}>
              <p className={styles.blockQuoteText}>
                You, my dear reader, are about to embark on the most epic
                journey of your lifetime
              </p>
            </div>
            <div className={styles.aboutBodyText}>
              <p>
                The coffee shop was not always like this. It used to be a
                normal, unremarkable place. But then, one day, something
                happened. No one knows quite what, but something definitely
                happened.
              </p>
              <p>
                Now, the coffee shop is a place of mystery and intrigue. The
                coffee is always just a little bit too good, and the sugar
                always seems to dissolve just a bit too fast. The customers are
                never quite the same from one day to the next. And the staff-
                well, the staff are definitely not normal.
              </p>
              <p>
                If you&apos;re looking for a place to get a good cup of coffee
                and to people watch, this is the place for you. But be warned-
                you may never quite know what you&apos;re getting yourself into
                when you step through those doors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
