import React from "react";
import styles from "./DiaryProductsList.module.css";

const item = [
  {
    name: "Баклажан",
    gramm: "100",
    kilocalories: "320",
  },
  {
    name: "Баклажан",
    gramm: "100",
    kilocalories: "320",
  },
  {
    name: "Баклажан",
    gramm: "100",
    kilocalories: "320",
  },
  {
    name: "Баклажан",
    gramm: "100",
    kilocalories: "320",
  },
];

const DiaryProductsListItem = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}></ul>
    </div>
  );
};

export default DiaryProductsListItem;
