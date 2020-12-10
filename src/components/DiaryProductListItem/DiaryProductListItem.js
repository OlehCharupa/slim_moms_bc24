import React from "react";
import { useSelector, useDispatch } from "react-redux";
import close from "./Image/close.svg";
import styles from "./DiaryProductListItem.module.css";
import {deleteElement} from "../../redux/operations/deleteOperations"

const DiaryProductListItem = ({ title, kcal, weight, id }) => {
  const token = useSelector((state) => state.token);
  const dayId = useSelector((state) => state.currentDateInfo.dayID)

  const dispatch = useDispatch()

  const deleteItem =()=> {
 
    dispatch(deleteElement( id ,dayId, token));
  };

  return (
    <li className={styles.list}>
      <span className={styles.listName}>{title}</span>
      <span className={styles.listWeight}>{weight} г</span>
      <span className={styles.listCalories}>
            {Math.round(kcal)} <span className={styles.ccal}> ккал</span>
      </span>
      <button className={styles.listButton} onClick={deleteItem}>
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