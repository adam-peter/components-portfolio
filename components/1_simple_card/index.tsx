import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

import crossIcon from "@/public/images/crossIcon.png";

const SimpleCard = () => {
  return (
    <div className={styles.simpleCard}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Notice!</h1>
        <button className={styles.iconButton}>
          <Image src={crossIcon} width="20" height="20" alt="x" />
        </button>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est pulvinar
        quam mauris a. Neque, libero consectetur commodo nunc, ornare.
      </p>
    </div>
  );
};

export default SimpleCard;
