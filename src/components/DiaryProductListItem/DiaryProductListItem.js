import React from "react";
import close from "./Image/close.svg";
import styles from "./DiaryProductListItem.module.css";

const DiaryProductListItem = () => {
  return (
    <>
      <li className={styles.list}>
        <span className={styles.listName}>Баклажан</span>
        <span className={styles.listWeight}>100 г</span>
        <span className={styles.listCalories}>
          320 <span className={styles.ccal}>ккал</span>
        </span>
        <button className={styles.listButton}>
          <img
            src={close}
            alt="close menu"
            aria-label="close menu"
            className={styles.img}
          />
        </button>
      </li>
      <li className={styles.list}>
        <span className={styles.listName}>Баклажан</span>
        <span className={styles.listWeight}>100 г</span>
        <span className={styles.listCalories}>
          320 <span className={styles.ccal}>ккал</span>
        </span>
        <button className={styles.listButton}>
          <img
            src={close}
            alt="close menu"
            aria-label="close menu"
            className={styles.img}
          />
        </button>
      </li>
      <li className={styles.list}>
        <span className={styles.listName}>Баклажан</span>
        <span className={styles.listWeight}>100 г</span>
        <span className={styles.listCalories}>
          320 <span className={styles.ccal}>ккал</span>
        </span>
        <button className={styles.listButton}>
          <img
            src={close}
            alt="close menu"
            aria-label="close menu"
            className={styles.img}
          />
        </button>
      </li>
      <li className={styles.list}>
        <span className={styles.listName}>Баклажан</span>
        <span className={styles.listWeight}>100 г</span>
        <span className={styles.listCalories}>
          320 <span className={styles.ccal}>ккал</span>
        </span>
        <button className={styles.listButton}>
          <img
            src={close}
            alt="close menu"
            aria-label="close menu"
            className={styles.img}
          />
        </button>
      </li>
    </>
  );
};

export default DiaryProductListItem;
