import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../../library/menu";

import HeroImage from "../../../public/assets/cofffee-hero.jpeg";
import CoffeeCupsImage from "../../../public/assets/cofffee-cups.jpeg";
import ShopImage from "../../../public/assets/astro-shop.jpeg";

const styles = require("./landing.module.scss");

type LandingViewProps = {};

const LandingView: React.FC<LandingViewProps> = (props: LandingViewProps) => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <Image
          src={HeroImage}
          alt="Coffee shop floating in space"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className={styles.landingPageContainer}>
        <Menu />
        {/* About Card */}
        <div className={styles.aboutCardContainer}>
          <div className={styles.aboutImageContainer} id="about">
            <Image
              src={CoffeeCupsImage}
              alt="Coffee cups and beans floating in space"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
            <h1 className={styles.aboutTitleText}>ABOUT</h1>
          </div>
          <div className={styles.aboutTextContainer}>
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

        {/* Shop Card */}
        <div className={styles.shopCardContainer}>
          <div className={styles.imageContainer}>
            <Link href={"/shop"}>
              <a className={styles.imageColorOverlay} />
            </Link>
            <Image
              src={ShopImage}
              alt="Astronaut drinking coffee and working at a laptop"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
            <h1 className={styles.shopTitleText}>SHOP</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingView;
