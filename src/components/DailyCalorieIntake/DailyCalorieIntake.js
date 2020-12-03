import React from "react";
import { useSelector } from "react-redux";
import styles from "./DailyCalorieIntake.module.css";
import Modal from "../modal/Modal";

const DailyCalorieIntake = ({ ccal = 2800 }) => {
  const products = ["Мучные продукты", "Молоко", "Красное мясо", "Копчености"];
  return (
    <Modal>
      <div className={styles.dailyCalorieIntake}>
        <h1 className={styles.title}>
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p className={styles.info}>
          <span className={styles.ccal}>{ccal}</span> ккал
        </p>
        <div className={styles.mustntEatDiv}>
          <h2 className={styles.mustntEat}>
            Продукты, которые вам <br /> не рекомендуется употреблять
          </h2>
          <ol className={styles.list}>
            {products.map((product) => (
              <li>{product}</li>
            ))}
          </ol>
        </div>
        <button type="button" className={styles.btn}>
          Начать худеть
        </button>
      </div>
    </Modal>
  );
};

export default DailyCalorieIntake;
