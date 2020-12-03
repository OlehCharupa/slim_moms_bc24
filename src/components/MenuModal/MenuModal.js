import React from "react";
import styles from "./MenuModal.module.css";

const MenuModal = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

export default MenuModal;
