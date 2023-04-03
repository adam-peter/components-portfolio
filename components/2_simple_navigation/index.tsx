import React from "react";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import styles from "./styles.module.scss";

const links = ["Home", "Services", "About us", "FAQ", "Contact us"];

const SimpleNavigation = () => {
  //This is a scuffed component I don't want to finish.

  return (
    <div className={styles.nav}>
      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon}/>
        <input className={styles.searchInput} />
      </div>
      <div className={styles.links}>
        {links.map((link: String) => (
          <Link
            href="#"
            className={styles.link}
            key={links.indexOf(link.toString())}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimpleNavigation;
