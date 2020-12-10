import React from "react";
import styles from "./MobileNavigation.module.css";
// import arrow from "./images/arrow.svg";

const MobileNavigation = ({ children }) => {
  return <div className={styles.menu}>{children}</div>;
};

export default MobileNavigation;
