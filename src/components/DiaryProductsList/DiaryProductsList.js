import React from "react";
import { useSelector } from "react-redux";
import DiaryProductsListItem from "../DiaryProductListItem/DiaryProductListItem";
import styles from "./DiaryProductsList.module.css";

const DiaryProductsList = () => {
  const items = useSelector((state) => state.eatenProduct);

  return (
    <div className={styles.relative}>
            <div className={styles.container}>
              <ul className={styles.list}>
                <DiaryProductsListItem />
              </ul>
            </div>
      <div className={styles.gradient}></div>
    </div>
  );
};

export default DiaryProductsList;
