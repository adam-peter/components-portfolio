import React from "react";

import styles from "./Home.module.scss";

import SimpleCard from "@/components/1_simple_card";
import SimpleNavigation from "@/components/2_simple_navigation";

const Home = () => {
  return (
    <div className={styles.home}>
      <SimpleCard />
      
    </div>
  );
};

export default Home;
