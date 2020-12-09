import React from "react";
import { useSelector } from "react-redux";
import close from "./Image/close.svg";
import styles from "./DiaryProductListItem.module.css";

const DiaryProductListItem = ({ name, kkal, id }) => {
  const token = useSelector((state) => state.token);

  return (
      <li className={styles.list} key={id}>
        <span className={styles.listName}>{name}</span>
        <span className={styles.listWeight}>100 г</span>
        <span className={styles.listCalories}>
          {kkal} <span className={styles.ccal}>ккал</span>
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
  );
};

export default DiaryProductListItem;