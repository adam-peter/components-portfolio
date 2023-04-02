import React from "react";

import SimpleCard from "@/components/1_simple_card";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <SimpleCard />
    </div>
  );
};

export default Home;
